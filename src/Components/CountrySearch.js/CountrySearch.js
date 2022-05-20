import React from "react";
import "./CountrySearch.css";
const CountrySearch = ({ searchCountry ,handleChange }) => {
  return (
    <>
      <section className="seaction_input">
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
