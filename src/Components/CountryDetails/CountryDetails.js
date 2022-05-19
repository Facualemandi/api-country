import React from "react";
import { NavLink } from "react-router-dom";
import './CountryDetails.css'

const CountryDetails = ({  name, img, capital, population, region }) => {
  return (
    <>
    <NavLink to={`/country/${name}`} className='nav_link_decoration'>
     <main className="main">
           <section className="main_section1">
               <img alt={name} src={img} className='img'/>
           </section>

           <section className="main_section2">
              <h2 className="main_name"> {name}</h2>
              <p> Population: <b>{population}</b> </p>
              <p> Capital: <b>{capital}</b> </p>
              <p> Region: <b>{region}</b> </p>
           </section>
     </main>
    </NavLink>
    </>
  );
};

export {CountryDetails};
