// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { PokemonRaw } from "../types";

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<PokemonRaw, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonsByIndex: builder.query<PokemonRaw, number>({
      query: (index) => `pokemon/${index}`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useGetPokemonsByIndexQuery } =
  pokemonApi;
