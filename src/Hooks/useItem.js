import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { helpHttp } from "../Helper/helpHttp";

export const useItem = () => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);

    const {code} = useParams()



    useEffect(() => {
      const isFetch = async () => {
        let urlApi = `https://restcountries.com/v2/alpha/${code}`;
        setLoading(true);
  
        const [isCount] = await Promise.all([helpHttp().get(urlApi)]);
  
        setCountry(isCount);
  
        setLoading(false);
      };
      isFetch();
    }, [code]);

  return {
    country,
    loading,
  };
};
