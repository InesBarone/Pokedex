import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./Pages/Principal/Principal";
import Pokebio from "./Pages/Pokebio/Pokebio";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/pokemon/:name" element={<Pokebio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
