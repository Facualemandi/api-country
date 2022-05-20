import React, { useState } from 'react';
import { useAllCountry } from './useAllCountry';


export const useSearch = () => {
    const [searchCountry, setSearchCountry] = useState("");
    const { country } = useAllCountry();

    const handleChange = (e) => {
      setSearchCountry(e.target.value);
    };
  
    let totalSearch = [];
  
    if (searchCountry.length < 1) {
      totalSearch = country;
    } else {
        totalSearch = country.filter((el) => 
        el.name.toLowerCase().includes(searchCountry.toLocaleLowerCase())
      );
    }
   return{
       searchCountry,
       setSearchCountry,
       handleChange,
       totalSearch,
       country,
   }
}
