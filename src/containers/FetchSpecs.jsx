import './Fetch.scss';
import Pokemon from '../components/Pokemon';

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
                <Pokemon pokemon={data}/>
            </>
}