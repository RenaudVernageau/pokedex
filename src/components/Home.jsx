import { Link } from "react-router-dom";

export default function Home({}) {
    return <>
            <h1 className="home">Bienvenue dans mon pokédex</h1>
            <figure>
                <Link to="/list">
                    <img src="./pokemon-pokeball.gif" alt="Pokeball"/>
                </Link>
            </figure>
        </>
}