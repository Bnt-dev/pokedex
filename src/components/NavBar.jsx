const NavBar = ({ pokemonIndex, setPokemonIndex, pokemonList }) => {


  const handleClick = (index) => (
    setPokemonIndex(index)
  )
    ;

  return (<div>
    {pokemonList.map((pokemon, index) =>
      <button key={pokemon.name} onClick={() => handleClick(index)}>{pokemon.name}</button>
    )

    }
  </div>
  )


}



export default NavBar