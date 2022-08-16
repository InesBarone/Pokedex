import React from "react";
import { Link, useParams } from "react-router-dom";
import { Pokeinfo } from "../../Components/Pokeinfo/Pokeinfo";
import Pokestats from "../../Components/Pokestats/Pokestats";
import "./Pokebio.css";

export default function Pokebio() {
  const params = useParams;

  const PokeName = params().name;

  const info = Pokeinfo.filter((pokemon) => pokemon.name === PokeName);

  const background = {
    backgroundColor: `${info[0].primaryColor}`,
  };

  const aboutColor = {
    color: `${info[0].primaryColor}`,
  };

  return (
    <div>
      <div className="Pokebio-container" style={background}>
        <div className="header">
          <div className="arrow-name">
            <Link to="/">
              <img
                src="/Images/arrow-left-w.svg"
                className="arrow-left"
                alt="Arrow left"
              />
            </Link>
            <h1 className="name-pokemon">{info[0].name}</h1>
          </div>
          <div className="id">{info[0].id}</div>
        </div>
        <div className="pokePhoto-container">
          <img src={info[0].img} alt="Pokemon picture" className="pokePhoto" />
        </div>
        <Pokestats info={info} aboutColor={aboutColor} />
      </div>
    </div>
  );
}
