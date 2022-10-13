import { useEffect, useState } from "react";
import Pokemon from "../components/Pokemon";

export default function FetchSpecs() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const FetchAPI = async() => {
        try{
            const response = await fetch(
                "https://pokeapi.co/api/v2/pokemon/1/"
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

    if (isLoading) return "Chargement...";

    if(error) return error;

    return  <>

            </>
}