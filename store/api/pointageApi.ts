import { EndpointBuilder } from "@reduxjs/toolkit/query";
import { baseApi } from "../baseApi";

// Définition des types pour les pointages
interface Pointage {
  id: string;
  userId: number;
  date: string;
  status: string;
  heure_arrivee: string;
  heure_depart: string;
  statut: string;
}

export const pointageApiSlice = baseApi.injectEndpoints({
  endpoints: (builder: EndpointBuilder<any, any, any>) => ({
    getPointage: builder.query<Pointage[], void>({
      query: () => ({
        url: `/pointages`,
        method: "GET",
      }),
    }),
    getPointageById: builder.query<Pointage, string>({
      query: (id: string) => ({
        url: `/pointages/${id}`,
        method: "GET",
      }),
    }),
    addPointage: builder.mutation<Pointage, Partial<Pointage>>({
      query: (pointage: Partial<Pointage>) => ({
        url: `/pointages`,
        method: "POST",
        body: pointage,
      }),
    }),
    updatePointage: builder.mutation<Pointage, Pointage>({
      query: (pointage: Pointage) => ({
        url: `/pointages/${pointage.id}`,
        method: "PUT",
        body: pointage,
      }),
    }),
    deletePointage: builder.mutation<void, string>({
      query: (id: string) => ({
        url: `/pointages/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export des hooks générés par RTK Query
export const {
  useGetPointageQuery,
  useGetPointageByIdQuery,
  useAddPointageMutation,
  useUpdatePointageMutation,
  useDeletePointageMutation,
} = pointageApiSlice;
