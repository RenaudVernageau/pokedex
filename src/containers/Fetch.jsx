import { useEffect, useState } from "react";
import List from "../components/List";

export default function Fetch() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchAPI = async () => {
        try{
            const response = await fetch(
                "https://pokeapi.co/api/v2/pokemon?limit=151"
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
        fetchAPI();
    },[]);

    if (isLoading) return "Chargement...";

    if (error) return error;

    return  <>
                <List pokemons={data.results}/>
            </>
}