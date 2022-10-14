import './Fetch.scss';
import { useEffect, useState } from "react";
import List from "../components/List";

export default function Fetch() {
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  //formulaire
  const [value, setValue] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  const fetchAPI = async () => {
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
            const data = await response.json();
            setData(data);
            setLoading(false);
            setFilteredPokemon(data.results);
        }   catch (err) {
            setError(err);
            throw err;
        }
    };

  //formulaire
  const handleChange = (ev) => {
    setValue(ev.target.value);
    setFilteredPokemon(
      data.results.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(ev.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    fetchAPI();
  },[]);

  if (isLoading) return <>
    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </>;

  if (error) return error;

  return  <>
            <div>
              <input type="text" onChange={handleChange} />
              <p>{value}</p>
            </div>
            <List key="" pokemons={filteredPokemon}/>
          </>
}