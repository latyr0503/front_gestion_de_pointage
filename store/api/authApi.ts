import { EndpointBuilder } from "@reduxjs/toolkit/query";
import { baseApi } from "../baseApi";
import { LoginCredentials, SignupCredentials, User } from "@/lib/types";

export const authApiSlice = baseApi.injectEndpoints({
  endpoints: (builder: EndpointBuilder<any, any, any>) => ({
    login: builder.mutation<User, LoginCredentials>({
      query: (credentials: LoginCredentials) => ({
        url: `/auth/signin`,
        method: "POST",
        body: credentials,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
    }),
    signup: builder.mutation<User, SignupCredentials>({
      query: (credentials: SignupCredentials) => ({
        url: `/auth/signup`,
        method: "POST",
        body: credentials,
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
    }),
    profile: builder.query<User, void>({
      query: () => ({
        url: `/auth/profile`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useProfileQuery } =
  authApiSlice;
