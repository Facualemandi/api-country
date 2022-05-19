import { useState, useEffect } from "react";
import { helpHttp } from "../Helper/helpHttp";

export const useAllCountry = () => {

  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isFetch = async () => {
      setLoading(true);
      let urlApi = 'https://restcountries.com/v2/all';
      const [allCountry] = await Promise.all([helpHttp().get(urlApi)]);
      setCountry(allCountry);
      setLoading(false);
    };
    isFetch();
  }, []);

  return {
    country,
    loading,
  };
};
