import React from "react";
import "./CountrySearch.css";
const CountrySearch = ({ searchCountry ,handleChange, darkMode }) => {
  
  return (
    <>
      <section className={`seaction_input ${darkMode && 'input_darkmode'}`}>
        <input
          type={"text"}
          placeholder="Enter country name..."
          onChange={handleChange}
          value={searchCountry}
        />
      </section>
    </>
  );
};

export default CountrySearch;
