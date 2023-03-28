import PropTypes from "prop-types"


const pokemonCard = ({ pokemon }) => {
  return <div>
    <div>{pokemon.name}</div>
    <img src={pokemon.imgSrc} alt={pokemon.name} />
  </div>
}

pokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired
}

export default pokemonCard