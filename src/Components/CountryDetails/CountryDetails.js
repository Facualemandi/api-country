import React from "react";
import { NavLink } from "react-router-dom";
import './CountryDetails.css'

const CountryDetails = ({  name, img, capital, population, region, code, darkMode }) => {
  return (
    <>
    <NavLink to={`/country/${code}`} className='nav_link_decoration'>
     <section className={`main ${darkMode && 'main-darkmode'}`}>
           <section className="main_section1">
               <img alt={name} src={img} className='img'/>
           </section>

           <section className={`main_section2 ${darkMode && 'main_section2-darkmode'}`}>
              <h2 className={`main_name`}> {name}</h2>
              <p> Population: <b>{population}</b> </p>
              <p> Capital: <b>{capital}</b> </p>
              <p> Region: <b>{region}</b> </p>
           </section>
     </section>
    </NavLink>
    </>
  );
};

export {CountryDetails};
