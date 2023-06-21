export type PokemonRaw = {
  id: number;
  name: string;
  type: string;
  sprites: {
    front_default: string;
    back_default: string;
    front_shiny?: string;
    back_shiny?: string;
  };
};

export type RefinedPokemon = {
  name: string;
  sprites: {
    front: string;
    back: string;
  };
};

export type ReduxAction = {
  payload: any;
  type: string;
};

export interface PokemonState {
  pokemon: PokemonRaw;
  loading: boolean;
  error: string;
}
