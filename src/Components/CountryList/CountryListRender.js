import React, { useState } from "react";
import Loaders from "../../Loader/Loaders";
import CountryList from "./CountryList";
import { CountryDetails } from "../CountryDetails/CountryDetails";
import { useAllCountry } from "../../Hooks/useAllCountry";
import CountrySearch from "../CountrySearch.js/CountrySearch";

const CountryListRender = () => {
  const { country, loading } = useAllCountry();

  const [searchCountry, setSearchCountry] = useState("");

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
