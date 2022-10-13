import "./List.scss";

import { Link } from "react-router-dom";

export default function List({ pokemons = [] }) {
    if(pokemons.length === 0){
        return "Pokémon non trouvé"
    }


    return (
        <ul>{pokemons.map((poke, index) => {
            return(
                <li>
                    <h2>
                    <Link
                        to={"/pokemon/"+poke.name}
                    >
                    <article className="card">
                      <p>{poke.name}</p>
                      <figure>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.url.split('/').slice(-2, -1)}.svg`} alt={poke.name} />
                      </figure>
                    </article>
                  </Link>
                </h2>
                <p></p>
            </li>
                )
            })}
        </ul>
    )
}