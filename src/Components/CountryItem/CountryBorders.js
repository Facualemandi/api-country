import React from "react";
import "./CountryBorders.css";

const CountryBorders = ({ el, changeBorderCountry }) => {
  return (
    <>
      <button className="item_border" onClick={() => changeBorderCountry(el)}>
        {el}
      </button>
    </>
  );
};

export default CountryBorders;
