export default function Pokemon({ specs = []}) {
  if(specs.length === 0){
    return "Le pokémon ne possède pas de spécificités"
  }
  return (
    <ul>{specs.map((spec, index) => {
      return(
        <li>
          <h2>
            <article className="card">
              <p></p>
              <figure>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.url.split('/').slice(-2, -1)}.svg`} alt={poke.name} />
              </figure>
            </article>
          </h2>
        </li>
      )
    }
    )}</ul>
  )
}