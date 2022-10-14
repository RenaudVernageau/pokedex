export default function Pokemon({ pokemon }) {
  if(pokemon.length === 0){
    return "Le pokémon ne possède pas de spécificités"
  }
  return (
    <ul>
        <li>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <img src={pokemon.sprites.back_default} alt={pokemon.name} />
          <img src={pokemon.sprites.front_shiny} alt={pokemon.name} />
          <img src={pokemon.sprites.back_shiny} alt={pokemon.name} />
          <span className="main__features">
            <p>Hauteur: <b>{pokemon.height}</b>"</p>
            <p>Poids: <b>{pokemon.weight}</b> lbs</p>
            <p>Expérience: <b>{pokemon.base_experience}</b> xp</p>
          </span>
          <p>Types: </p>
          <p className="specs">{pokemon.types.map((type,i) => {
              return <span key={i} className="abilities">{type.type.name} </span>
          })}</p>
          <p>Capacités: </p>
          <p className="specs">{pokemon.abilities.map((ability,i) => {
              return <span key={i} className="abilities">{ability.ability.name} </span>
          })}</p>
          <p>Statistiques: </p>
          <p className="specs">{pokemon.stats.map((stat,i) => {
              return <span key={i} className="abilities">{stat.stat.name} </span>
          })}</p>
        </li>
    </ul>
  )
}