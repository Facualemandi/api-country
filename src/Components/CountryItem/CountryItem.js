import React from "react";
import { useItem } from "../../Hooks/useItem";
import CountryItemRender from './CountryItemRender'

const CountryItem = () => {
      const {country, loading} = useItem()

      console.log(country)
  
  return (
     <>
     {country.map(el =>
         <CountryItemRender
          key={el.name}
          img={el.flag}
          name ={el.name}
          capital={el.capital}
          population={el.population}
          languages={el.languages[0].name}
          region={el.region}
          subregion={el.subregion}
          borders={el.borders}
          currencies={el.currencies[0].name}
          topLevelDomain={el.topLevelDomain[0]}
         />
      )}
      
        
     </>
  );
};

export default CountryItem;
