export default function Pokemon({ specs = []}) {
  if(specs.length === 0){
    return "Le pokémon ne possède pas de spécificités"
  }
  return (
    <ul>{specs.map((spec, index) => {
      return(
        <li>

        </li>
      )
    }
    )}</ul>
  )
}