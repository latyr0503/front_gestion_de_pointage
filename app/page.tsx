"use client";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import image from "@/public/media/groupe.jpg";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container mx-auto py-8 relative">
      <div className="absolute w-[250px] h-[250px] blur-3xl rounded-full bg-sky-500 opacity-20"></div>
      <div className="absolute w-[450px] top-[3vh] right-0 h-[450px] blur-3xl rounded-full bg-pink-500 opacity-20"></div>
      <section className="mt-12">
        <div className="overflow-hidden">
          <div className="container">
            <div className="mx-auto flex max-w-5xl flex-col items-center">
              <div className="z-10 items-center text-center">
                <h1 className="mb-8 text-4xl font-light text-pretty lg:text-7xl leading-10">
                  Simplifiez la{" "}
                  <a className="underline decoration-sky-500 capitalize font-bold">
                    gestion des présences
                  </a>{" "}
                  avec notre logiciel de{" "}
                  <a className="underline decoration-pink-500 capitalize font-bold">
                    pointage intelligent
                  </a>
                </h1>
                <p className="mx-auto max-w-screen-md text-muted-foreground lg:text-xl">
                  Gérez efficacement les arrivées, départs et présences de vos
                  équipes grâce à une solution intuitive et sécurisée. Optimisez
                  le suivi du temps de travail, réduisez les erreurs et
                  améliorez la productivité au quotidien, le tout en quelques
                  clics.
                </p>
                <div className="mt-12 flex w-full flex-col justify-center gap-2 sm:flex-row">
                  <Link href="/auth/register">
                    <Button>
                      S’inscrire gratuitement
                      <ChevronRight className="ml-2 h-4" />
                    </Button>
                  </Link>
                  <Link href="/auth/login">
                    <Button variant="ghost">
                      Se connecter à mon compte
                      <ChevronRight className="ml-2 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
              <VelocityScroll
                defaultVelocity={2}
                className="my-24 text-muted-foreground font-medium"
              >
                Suivi précis / Gestion simplifiée / Productivité optimisée
              </VelocityScroll>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
            <img
              src={image.src}
              alt="placeholder"
              className="mx-auto  max-h-[700px] w-full max-w-7xl rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
