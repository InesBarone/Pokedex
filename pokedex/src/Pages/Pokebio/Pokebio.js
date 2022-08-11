import React from "react";
import { useParams } from "react-router-dom";
import { Pokeinfo } from "../../Components/Pokeinfo/Pokeinfo";
import "./Pokebio.css";

export default function Pokebio() {
  const params = useParams;

  // PokeName dará como resultado el nombre del pokemon
  const PokeName = params().name;

  // info será el resultado de filtrar Pokeinfo, se filtrará el objeto
  // cuyo nombre sea igual a Pokename, dando el objeto con toda la informacion del pokemon
  const info = Pokeinfo.filter((pokemon) => pokemon.name === PokeName);
  // Para obtener la informacion debemos ahora llamar a info[0] porque se guardó el objeto
  // en la posicion 0 del array

  const background = {
    backgroundColor: `${info[0].primaryColor}`,
  };

  return (
    <div>
      <div className="Pokebio-container" style={background}>
        <div className="header">
          <div className="arrow-name">
            {/* Falta cambiarle el color a blanco, no sé como cambiar el color de un svg */}
            <img
              src="/Images/arrow-left-w.svg"
              className="arrow-left"
              alt="Arrow left"
            />
            <h1 className="name-pokemon">{info[0].name}</h1>
          </div>
          <div className="id">{info[0].id}</div>
        </div>
      </div>
    </div>
  );
}
