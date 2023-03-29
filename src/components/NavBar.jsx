const NavBar = ({ pokemonIndex, setPokemonIndex, pokemonList }) => {
  const nextClick = () => {
    if (pokemonIndex < pokemonList.length - 1 && pokemonIndex != 2) { setPokemonIndex(pokemonIndex + 1); console.log(pokemonIndex); }
    else if (pokemonIndex < pokemonList.length - 1 && pokemonIndex === 2) {
      setPokemonIndex(pokemonIndex + 1), alert("Pika pika !!!"); console.log(pokemonIndex);
    }
  }

  const previousClick = () => {
    if (pokemonIndex > 0 && pokemonIndex != 4) {
      setPokemonIndex(pokemonIndex - 1); console.log(pokemonIndex)
    }
    else if (pokemonIndex > 0) { alert("Pika pika !!!"), setPokemonIndex(pokemonIndex - 1); console.log(pokemonIndex) }
  }

  return (<div className="button">
    <button onClick={previousClick} >Précédent</button>
    <button onClick={nextClick} >Suivant</button>
  </div>)
}



export default NavBar