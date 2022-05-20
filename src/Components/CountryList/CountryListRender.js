import React, { useState } from "react";
import Loaders from "../../Loader/Loaders";
import CountryList from "./CountryList";
import { CountryDetails } from "../CountryDetails/CountryDetails";
import { useAllCountry } from "../../Hooks/useAllCountry";
import CountrySearch from "../CountrySearch.js/CountrySearch";
import { useSearch } from "../../Hooks/useSearch";

const CountryListRender = () => {
  const { country, loading } = useAllCountry();
  const {searchCountry, setSearchCountry, totalSearch, handleChange} = useSearch()



  return (
    <>
      {loading && <Loaders />}

      <CountrySearch
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
        handleChange={handleChange}
      />

      {!loading && (
        <CountryList>
          {totalSearch.map((el) => (
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
