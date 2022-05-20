import React from "react";
import { useItem } from "../../Hooks/useItem";
import './CountryItem.css'
import CountryBorders from './CountryBorders'


const CountryItem = ({changeBorderCountry}) => {
      const {country, loading} = useItem()
      const value = (Object.values(country))




  
  return (
     <>
      <section className="item">
        <section className="asdds">

        <section className=" container_img">
          <img className=" item_img" src={value[22]} alt={value[0]} />
        </section>

        <div>
          <div className="asd">
            <section className="section_item_one">
              <h1 className=" item_h1">{value[0]}</h1>

              <p>
                Native name: <span>{value[0]}</span>
              </p>
              <p>
                Populaation: <span>{value[9]}</span>
              </p>
              <p>
                Region: <span>{value[7]}</span>
              </p>
              <p>
                SubRegion: <span>{value[8]}</span>
              </p>
              <p>
                Capital: <span>{value[5]}</span>
              </p>
            </section>

            <section className="section_item_two">
              {value[0] ? (
                <p>
                  Top level: <span>{value[0]}</span>
                </p>
              ) : (
                <span>
                  <b>Dont' Have</b>
                </span>
              )}
              {value[0] ? (
                <p>
                  Currencias: <span>{value[19][0].name}</span>
                </p>
              ) : (
                <span>
                  <b>Don't Have</b>
                </span>
              )}
              {value[0] ? (
                <p>
                  Languages: <span>{value[20][0].name}</span>
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
            {value[15] ? (
              <p className="border">
                Borders: {value[15].map((el) => ( <CountryBorders key={el} el={el} changeBorderCountry={changeBorderCountry} />
                ))}
              </p>
            ) : (
              <p className="dont_borders"> <b>Don't have borders.</b>  </p>
            )}
          
          </section>
        </div>
        </section>
      </section>
      
        
     </>
  );
};

export default CountryItem;
