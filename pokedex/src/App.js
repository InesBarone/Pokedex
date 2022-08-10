import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./Pages/Principal/Principal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
