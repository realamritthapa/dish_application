import React from "react";
import "./displayInfo.css";
export default function Ingredient({ data }) {
  return (
    <div className='ingredients'>
      {data.map((ingredient, index) => (
        <p key={index}>{ingredient.text}</p>
      ))}
    </div>
  );
}
