import React from "react";
import { Pokeinfo } from "../Pokeinfo/Pokeinfo";

export default function Pokecard() {
  return (
    <div>
      <ul>
        {Object.values(Pokeinfo).map((key) => {
          return <li>{key.name}</li>;
        })}
      </ul>
    </div>
  );
}
