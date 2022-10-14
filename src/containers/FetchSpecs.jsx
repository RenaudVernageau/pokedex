import './Fetch.scss';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";


export default function FetchSpecs() {
    const {name} = useParams();
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const FetchAPI = async() => {
        try{
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${name}/`
            );
            const data = await response.json();
            console.log(data);
            setData(data);
            setLoading(false);
        }   catch (err) {
            setError(err);
            throw err;
        }
    };

    useEffect(() => {
        FetchAPI();
    },[]);

    if (isLoading) return <>
    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </>;

    if(error) return error;

    return  <>
                <h1>{data.name}</h1>
                <img src={data.sprites.front_default} alt={data.name} />
                <img src={data.sprites.back_default} alt={data.name} />
                <img src={data.sprites.front_shiny} alt={data.name} />
                <img src={data.sprites.back_shiny} alt={data.name} />
                <p>Hauteur: {data.height}</p>
                <p>Poids: {data.weight}</p>
                <p>Expérience: {data.base_experience}</p>
                <p>Types: {data.types.map((type) => {
                    return <span>{type.type.name} </span>
                })}</p>
                <p>Capacités: {data.abilities.map((ability) => {
                    return <span>{ability.ability.name} </span>
                })}</p>
                <p>Statistiques: {data.stats.map((stat) => {
                    return <span>{stat.stat.name} </span>
                })}</p>
            </>
}