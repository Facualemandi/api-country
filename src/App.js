import { Route, Routes } from "react-router-dom";
import CountryItem from "./Components/CountryItem/CountryItem";
import CountryListRender from "./Components/CountryList/CountryListRender";


function App() {




  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<CountryListRender/>}/>
          <Route path="/country/:name" element={<CountryItem />}/>
        </Routes>
    </div>
  );
}

export default App;


