import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AllBeersList from "./pages/AllBeersList";
import BeerDetails from "./components/BeerDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/allBeersList" element={<AllBeersList />}></Route>
        <Route path="/beerDetails/:id" element={<BeerDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
