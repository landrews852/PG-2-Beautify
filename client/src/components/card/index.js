import React from "react";
import "./card.css"
export default function Card({ image, product_name, cost_by_unit }) {
  return (
    <div className="cardcontenedor">
      <div className="cards">
        <img src={image} alt="Img not found" />
        <h3>{product_name}</h3>
        <span className="cardcost">$ {cost_by_unit}</span>
        <button class="buttoncart">
          <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
          </span>
          <span class="button-text">+ carrito</span>
        </button>
      </div>
    </div>
  );
}
//
