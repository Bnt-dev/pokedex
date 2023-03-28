const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function pokemonCard() {
  let pokemon = pokemonList[0];
  if (pokemon.imgSrc != null) { return <figure><img src={pokemon.imgSrc} alt={pokemon.name} /><figcaption>{pokemon.name}</figcaption></figure> }
  else { return <figure><p>???</p><figcaption>{pokemon.name}</figcaption></figure> }
  ;
}


export default pokemonCard