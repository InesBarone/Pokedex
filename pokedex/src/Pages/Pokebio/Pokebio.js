import React from "react";
import { Link, useParams } from "react-router-dom";
import { Pokeinfo } from "../../Components/Pokeinfo/Pokeinfo";
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
        <div className="poke-stats">
          <div className="poke-type-container">
            {info[0].type.map((type, i) => {
              if (i == 0) {
                return (
                  <div
                    className="poke-type"
                    style={{ backgroundColor: `${info[0].primaryColor}` }}
                  >
                    {type}
                  </div>
                );
              } else {
                return (
                  <div
                    className="poke-type"
                    style={{ backgroundColor: `${info[0].secondaryColor}` }}
                  >
                    {type}
                  </div>
                );
              }
            })}
          </div>
          <h2 className="about" style={aboutColor}>
            About
          </h2>
          <div className="poke-physics">
            <div className="physics-container">
              <div className="img-values">
                <img
                  src="/Images/Weight.svg"
                  alt="weight-pic"
                  className="weight-pic"
                />
                <h3>{info[0].weight}</h3>
              </div>
              <h4>Weight</h4>
            </div>
            <div className="gray-line"></div>
            <div className="physics-container">
              <div className="img-values">
                <img
                  src="/Images/Height.svg"
                  alt="weight-pic"
                  className="height-pic"
                />
                <h3>{info[0].height}</h3>
              </div>
              <h4>Height</h4>
            </div>
            <div className="gray-line"></div>
            <div className="physics-container">
              <div className="img-values">
                <h3>{info[0].moves}</h3>
              </div>
              <h4>Moves</h4>
            </div>
          </div>
          <p className="poke-description">{info[0].description}</p>
          <h2 className="base-stats" style={aboutColor}>
            Base Stats
          </h2>
          <div className="general-stats">
            <div className="stats-container">
              {info[0].stats.map((stat) => {
                return (
                  <div>
                    <div className="stats-text">
                      <h5>{stat.name}</h5>
                      <p>{stat.value}</p>
                    </div>
                    <meter
                      value={parseInt(`${stat.value}`)}
                      min="0"
                      max="220"
                    ></meter>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
