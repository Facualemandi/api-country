import React from "react";
import Loaders from "../../Loader/Loaders";
import CountryList from "./CountryList";
import {CountryDetails} from "../CountryDetails/CountryDetails";
import {useAllCountry} from "../../Hooks/useAllCountry";

const CountryListRender = () => {
  const { country, loading } = useAllCountry();
  return (
    <>
      {loading && <Loaders />}
      {!loading && (
        <CountryList>
          {country.map((el) => (
            <CountryDetails
              key={el.name}
              name={el.name}
              img={el.flag}
              capital={el.capital}
              population={el.population}
              region={el.region}
              code={el.alpha3Code}
            />
          ))}
        </CountryList>
      )}
    </>
  );
};

export default CountryListRender;
