const NavBar = ({ pokemonIndex, setPokemonIndex, pokemonList }) => {
  const nextClick = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  }

  const previousClick = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  }

  return (<div className="button">
    <button onClick={previousClick} >Précédent</button>
    <button onClick={nextClick} >Suivant</button>
  </div>)
}



export default NavBar