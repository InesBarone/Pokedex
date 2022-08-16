import React from "react";
import Pokecard from "../../Components/Pokecard/Pokecard";
import "./Principal.css";
import { useState } from "react";
import { Pokeinfo } from "../../Components/Pokeinfo/Pokeinfo";

export default function Principal() {
  // Este estado se corresponde con el texto ingresado en la barra de busqueda
  const [text, setText] = useState("");
  const [order, setOrder] = useState(false);
  const [pokeinfo, setPokeinfo] = useState(Pokeinfo);

  const manejarInput = (e) => {
    setText(e.target.value);
  };

  const manageSortId = (e) => {
    setOrder(false);
    setPokeinfo((previousState) => {
      let array = [...previousState];
      return array.sort((a, b) => a.number - b.number);
    });
  };

  // previousState => {
  //   let array = [...previousState]
  //   if(e.target.value == 1){
  //   return array.sort((a,b) => a.edad - b.edad)

  const manageSortName = (e) => {
    setOrder(true);
    setPokeinfo((previousState) => {
      let array = [...previousState];
      function sortAlfabeto(x, y) {
        if (x.name < y.name) {
          return -1;
        }
        if (x.name > y.name) {
          return 1;
        }
        return 0;
      }
      return array.sort(sortAlfabeto);
    });
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
          {order ? (
            <button className="arrow-button" onClick={manageSortId}>
              <p>a-z</p>
              <img
                src="/Images/Arrow.svg"
                alt="arrow-button"
                className="arrow"
              />
            </button>
          ) : (
            <button className="arrow-button" onClick={manageSortName}>
              <p>#</p>
              <img
                src="/Images/Arrow.svg"
                alt="arrow-button"
                className="arrow"
              />
            </button>
          )}
        </div>
        <input
          type="search"
          placeholder="🔎 Buscar"
          className="search-bar"
          onChange={manejarInput}
        />
      </header>
      <main>
        <Pokecard text={text} pokeinfo={pokeinfo} />
      </main>
    </div>
  );
}
