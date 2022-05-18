import React, { useState, useEffect } from "react";
import CountryDetails from "./Components/CountryList/CountryDetails/CountryDetails";
import CountryList from "./Components/CountryList/CountryList";

import { helpHttp } from "./Helper/helpHttp";
import Loaders from "./Loader/Loaders";

function App() {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isFetch = async () => {
      setLoading(true);
      let urlApi = "https://restcountries.com/v2/all";
      const [allCountry] = await Promise.all([helpHttp().get(urlApi)]);
      setCountry(allCountry);
      console.log(allCountry)
    };
    isFetch();
  }, []);

  return (
    <div className="App">
      <CountryList>
        {country.map((el) => (
          <CountryDetails
            key={el.name}
            name={el.name}
            img={el.flag}
            capital={el.capital}
            population={el.population}
            region={el.region}
          />
        ))}
      </CountryList>
   
    </div>
  );
}

export default App;
