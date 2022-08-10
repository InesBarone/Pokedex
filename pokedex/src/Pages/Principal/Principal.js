import React from "react";
import Pokecard from "../../Components/Pokecard/Pokecard";
import "./Principal.css";

export default function Principal() {
  return (
    <div>
      <header>
        <div className="header-1">
          <div className="logo-title">
            <img
              src="/Images/Pokeball.png"
              className="logo"
              alt="Logo pokebola"
            />
            <h1>Pokédex</h1>
          </div>
          <button className="arrow-button">
            <p>#</p>
            <img src="/Images/Arrow.svg" alt="arrow-button" className="arrow" />
          </button>
        </div>
        <input type="search" placeholder="🔎 Buscar" className="search-bar" />
      </header>
      <main>
        <Pokecard />
      </main>
    </div>
  );
}
