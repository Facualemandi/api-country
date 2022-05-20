import React, { useEffect } from "react";
import { useItem } from "../../Hooks/useItem";
import "./CountryItem.css";
import CountryBorders from "./CountryBorders";
import Loaders from "../../Loader/Loaders";
import { useDarkMode } from "../../Hooks/useDarkMode";

const CountryItem = ({ changeBorderCountry }) => {
  const { country, loading } = useItem();

  const {darkMode} = useDarkMode()
  


console.log(country)
console.log(country.name)
  return (
    <>
      {loading && <Loaders />}

      {!loading && (
        <section className={`item ${darkMode && 'item-darkmode'}`}>
          <section className="asdds">
            <section className=" container_img">
              <img className=" item_img" src={country.flag} alt={country.name} />
            </section>

            <div>
              <div className="asd">
                <section className="section_item_one">
                  <h1 className=" item_h1">{country.name}</h1>

                  {
                    <p>
                      Native name: <span>{country.name}</span>
                    </p>
                  }
                  <p>
                    Populaation: <span>{country.nativeName}</span>
                  </p>
                  <p>
                    Region: <span>{country.region}</span>
                  </p>
                  <p>
                    SubRegion: <span>{country.subregion}</span>
                  </p>
                  <p>
                    Capital: <span>{country.capital}</span>
                  </p>
                </section>

                <section className="section_item_two">
                  {country.topLevelDomain ? (
                    <p>
                      Top level: <span>{country.topLevelDomain[0]}</span>
                    </p>
                  ) : (
                    <span>
                      <b>Dont' Have</b>
                    </span>
                  )}
                  {country.currencies ? (
                    <p>
                      Currencias: <span>{country.currencies[0].name}</span>
                    </p>
                  ) : (
                    <span>
                      <b>Don't Have</b>
                    </span>
                  )}
                  {country.languages ? (
                    <p>
                      Languages: <span>{country.languages[0].name}</span>
                    </p>
                  ) : (
                    <span>
                      <b> Donn't have. </b>
                    </span>
                  )}
                </section>
              </div>
              <section>

                {country.borders ? (
                  <p className="border">
                    Borders:{" "}
                    {country.borders.map((el) => (
                      <CountryBorders
                        key={el}
                        el={el}
                        changeBorderCountry={changeBorderCountry}
                      />
                    ))}
                  </p>
                ) : (
                  <p className="dont_borders">
                    {" "}
                    <b>Don't have borders.</b>{" "}
                  </p>
                )}
              </section>
            </div>
          </section>
        </section>
      )}
    </>
  );
};

export default CountryItem;
