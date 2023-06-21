import "../App.css";
import { useHomeScreen } from "../Hooks/useHomeScreen";

export const HomeScreen = () => {
  const { isLoading, pokemon, nextPage, previousPage } = useHomeScreen();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!pokemon) {
    return <h1>Os pokémons acabaram ;-;</h1>;
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front} alt="your_pokemon" />
      <img src={pokemon.sprites.back} alt="your_pokemon" />
      <h1 onClick={() => nextPage()}>Next Page</h1>
      <h1 onClick={() => previousPage()}>Previous Page</h1>
    </div>
  );
};
