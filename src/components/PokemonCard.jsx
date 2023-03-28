const pokemonCard = ({ pokemon, imgPokemon }) => {
  return <div>
    <div>{pokemon}</div>
    <img src={imgPokemon} alt={pokemon} />
  </div>
}


export default pokemonCard