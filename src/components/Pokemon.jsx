import { useEffect } from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

export default function Pokemon({name,img,weight,size,capacities,statistics,type}) {

  const [data, setData] = useState([]);

  const FetchAPI = async () => {
      
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1/`);
  
        const data = await response.json();
  
        setData(data);
  
  }


    return(
    <li>
        <h2>{name}</h2>
        <figure>
          <img src={img} alt={name} />
        </figure>
        <p>{weight}</p>
        <p>{size}</p>
        <p>{capacities}</p>
        <p>{statistics}</p>
        <p>{type}</p>
    </li>
    )
}