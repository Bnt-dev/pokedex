import MyTitle from "./components/MyTitle";
import PokemonCard from "./components/PokemonCard";

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
      imgSrc: 'src/assets/Mew.jfif'
    },
  ];

  return (
    <div>
      <MyTitle />
      <PokemonCard pokemon={pokemonList[1].name} imgPokemon={pokemonList[1].imgSrc} />
    </div>
  );
}

export default App;