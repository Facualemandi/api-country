import React from "react";
import CountryBorders from "./CountryBorders";
import "./CountryItemRender.css";

const CountryItemRender = ({
  img,
  name,
  capital,
  population,
  languages,
  region,
  subregion,
  borders,
  currencies,
  topLevelDomain,
}) => {
  return (
    <>
      <section className="item">
        <section className="asdds">

        <section className=" container_img">
          <img className=" item_img" src={img} alt={name} />
        </section>

        <div>
          <div className="asd">
            <section className="section_item_one">
              <h1 className=" item_h1">{name}</h1>

              <p>
                Native name: <span>{name}</span>
              </p>
              <p>
                Populaation: <span>{population}</span>
              </p>
              <p>
                Region: <span>{region}</span>
              </p>
              <p>
                SubRegion: <span>{subregion}</span>
              </p>
              <p>
                Capital: <span>{capital}</span>
              </p>
            </section>

            <section className="section_item_two">
              {topLevelDomain ? (
                <p>
                  Top level: <span>{topLevelDomain}</span>
                </p>
              ) : (
                <span>
                  <b>Dont' Have</b>
                </span>
              )}
              {currencies ? (
                <p>
                  Currencias: <span>{currencies}</span>
                </p>
              ) : (
                <span>
                  <b>Don't Have</b>
                </span>
              )}
              {languages ? (
                <p>
                  Languages: <span>{languages}</span>
                </p>
              ) : (
                <span>
                  {" "}
                  <b> Donn't have. </b>
                </span>
              )}
            </section>
          </div>
          <section>
            {borders ? (
              <p className="border">
                Borders:{" "}
                {borders.map((el) => (
                  <CountryBorders key={el} el={el} />
                ))}
              </p>
            ) : (
              <p className="dont_borders">
                {" "}
                <b>Don't have borders.</b>
              </p>
            )}
          </section>
        </div>
        </section>
      </section>
    </>
  );
};

export default CountryItemRender;
