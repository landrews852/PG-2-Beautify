import React from "react";
import "./card.css"
import Button from "../button/button";


export default function Card({ image, product_name, cost_by_unit }) {
  return (
    <div className="cardcontenedor">
      <div className="cards">
        <img src={image} alt="Img not found" />
        <h3>{product_name}</h3>
        <span className="cardcost">$ {cost_by_unit}</span>
        <Button></Button>
      </div>
    </div>
  );
}
//
