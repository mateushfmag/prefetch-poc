import { useState, useCallback } from "react";
import { pokemonApi, useGetPokemonsByIndexQuery } from "../Services/pokemonApi";
import { RefinedPokemon } from "../types";

const toCapitalCase = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const useHomeScreen = () => {
  const [page, setPage] = useState(1);

  const {
    data: pokemon,
    isLoading,
    isFetching,
  } = useGetPokemonsByIndexQuery(page);

  const prefetchPokemon = pokemonApi.usePrefetch("getPokemonsByIndex", {
    ifOlderThan: 10,
  });

  const prefetchNext = useCallback(() => {
    prefetchPokemon(page + 1);
  }, [prefetchPokemon, page]);

  prefetchNext();

  const nextPage = () => setPage(page + 1);
  const previousPage = () => setPage(page - 1);

  return {
    page,
    nextPage,
    previousPage,
    pokemon:
      pokemon &&
      ({
        name: toCapitalCase(pokemon.name),
        sprites: {
          front: pokemon.sprites.front_default,
          back: pokemon.sprites.back_default,
        },
      } as RefinedPokemon),
    isLoading: isLoading || isFetching,
  };
};
