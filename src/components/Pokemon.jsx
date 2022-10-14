export default function Pokemon({ pokemon }) {
  if(pokemon.length === 0){
    return "Le pokémon ne possède pas de spécificités"
  }
  return (
    <ul>
        <li>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <img src={pokemon.sprites.back_default} alt={pokemon.name} />
          <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
          <img src={pokemon.sprites.back_shiny} alt={pokemon.name} />
          <p>Hauteur: {pokemon.height}</p>
          <p>Poids: {pokemon.weight}</p>
          <p>Expérience: {pokemon.base_experience}</p>
          <p>Types: {pokemon.types.map((type) => {
              return <span>{type.type.name} </span>
          })}</p>
          <p>Capacités: {pokemon.abilities.map((ability) => {
              return <span>{ability.ability.name} </span>
          })}</p>
          <p>Statistiques: {pokemon.stats.map((stat) => {
              return <span>{stat.stat.name} </span>
          })}</p>
        </li>
    </ul>
  )
}