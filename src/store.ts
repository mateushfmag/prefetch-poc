import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./Services/pokemonApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const preloadedState = {
  pokemonApi: undefined,
};

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
  preloadedState,
  enhancers: [],
});

setupListeners(store.dispatch);
