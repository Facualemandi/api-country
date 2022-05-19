import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { helpHttp } from "../Helper/helpHttp";

export const useItem = () => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);

    const {name} = useParams()

    useEffect(() => {
      const isFetch = async () => {
        let urlApi = `https://restcountries.com/v2/name/${name}`;
        setLoading(true);
  
        const [isCount] = await Promise.all([helpHttp().get(urlApi)]);
  
        setCountry(isCount);
  
        setLoading(false);
      };
      isFetch();
    }, [name]);

  return {
    country,
    loading,
    name,
  };
};
