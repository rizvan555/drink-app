import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AllBeersList from "./pages/AllBeersList";
import BeerDetails from "./components/BeerDetails";
import Random from "./components/Random";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/allBeersList" element={<AllBeersList />}></Route>
        <Route path="/beerDetails/:id" element={<BeerDetails />}></Route>
        <Route path="/random" element={<Random />}></Route>
      </Routes>
    </div>
  );
}

export default App;
