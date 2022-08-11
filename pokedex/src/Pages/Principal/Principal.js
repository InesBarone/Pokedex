import React from "react";
import Pokecard from "../../Components/Pokecard/Pokecard";
import "./Principal.css";
import { useState } from "react";

export default function Principal() {
  // Este estado se corresponde con el texto ingresado en la barra de busqueda
  const [text, setText] = useState("");

  const manejarInput = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="Principal-container">
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
        <input
          type="search"
          placeholder="🔎 Buscar"
          className="search-bar"
          onChange={manejarInput}
        />
      </header>
      <main>
        <Pokecard text={text} />
      </main>
    </div>
  );
}
