import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { UserRole } from "./lib/types";

const protectedRoutes: Record<string, UserRole[]> = {
  "/dashboard/admin": ["ADMIN"],
  "/dashboard/user": ["USER"],
  "/dashboard": ["ADMIN", "USER"],
};

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const userCookie = request.cookies.get("user")?.value;

  const pathname = request.nextUrl.pathname;
  const isAuthPage = pathname.startsWith("/auth");
  const isLoginPage = pathname === "/auth/login";
  const isLogoutPage = pathname === "/auth/logout";

  if (isLoginPage || isLogoutPage) {
    return NextResponse.next();
  }

  if (isAuthPage) {
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (userCookie) {
    try {
      const user = JSON.parse(userCookie);
      const userRole = user.role as UserRole;

      const sortedRoutes = Object.keys(protectedRoutes).sort(
        (a, b) => b.length - a.length
      );

      for (const route of sortedRoutes) {
        if (pathname.startsWith(route)) {
          const allowedRoles = protectedRoutes[route];
          if (!allowedRoles.includes(userRole)) {
            return NextResponse.redirect(new URL("/401", request.url));
          }
          break;
        }
      }
    } catch (error) {
      console.error("Erreur de parsing du cookie user", error);
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  } else {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};