import { Route, Routes } from "react-router-dom";
import CountryItem from "./Components/CountryItem.js/CountryItem";
import CountryDetails from "./Components/CountryDetails/CountryDetails";
import CountryList from "./Components/CountryList/CountryList";

import { useAllCountry } from "./Hooks/useAllCountry";
import Loaders from "./Loader/Loaders";

function App() {
  const { country, loading } = useAllCountry();

  return (
    <div className="App">


      {loading && <Loaders />}
      {!loading && (
        <CountryList>
          {country.map((el) => (
            <CountryDetails
              key={el.name}
              name={el.name}
              img={el.flag}
              capital={el.capital}
              population={el.population}
              region={el.region}
              code={el.alpha3Code}
            />
          ))}
        </CountryList>
      )}
    </div>
  );
}

export default App;


{/* <Routes>
<Route path="/*" />
<Route path="/country/:name" element={<CountryItem />} />
</Routes> */}
