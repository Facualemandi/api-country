import React, { useState } from "react";
import Loaders from "../../Loader/Loaders";
import CountryList from "./CountryList";
import { CountryDetails } from "../CountryDetails/CountryDetails";
import { useAllCountry } from "../../Hooks/useAllCountry";
import CountrySearch from "../CountrySearch.js/CountrySearch";
import { useSearch } from "../../Hooks/useSearch";
import DarkMode from "../DarkMode/DarkMode";
import { useDarkMode } from "../../Hooks/useDarkMode";

const CountryListRender = () => {

   const { loading } = useAllCountry();
   const { searchCountry, setSearchCountry, totalSearch, handleChange } = useSearch();
   const {darkMode, changeMode} = useDarkMode()



  return (
    <>
      {loading && <Loaders />}

      <DarkMode changeMode={changeMode} darkMode={darkMode} />

      <CountrySearch
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
        handleChange={handleChange}
        darkMode={darkMode}
      />

      {!loading && (
        <main className={`${darkMode && 'main_darkmode'}`}>
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
                darkMode={darkMode}
              />
            ))}
          </CountryList>
        </main>
      )}
    </>
  );
};

export default CountryListRender;
