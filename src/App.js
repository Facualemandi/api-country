import { Route, Routes, useNavigate } from "react-router-dom";
import CountryItem from "./Components/CountryItem/CountryItem";
import CountryListRender from "./Components/CountryList/CountryListRender";

function App() {

  let nav = useNavigate()
  const changeBorderCountry = (el) => {
        nav(`country/${el}`)
  };

  let  ret = useNavigate()
  const toReturn = () => {
        ret('/')
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CountryListRender />} />

        <Route
          path="/country/:code"
          element={<CountryItem changeBorderCountry={changeBorderCountry} toReturn={toReturn}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
