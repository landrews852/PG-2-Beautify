import React from "react";
import "./productCard.css";
import Button from "../../elements/buttons/button/button";

import Amount from "../../features/amountProduct/amountProduct";

export default function Card({ image, product_name, cost_by_unit, id }) {
  return (
    <div className="cardcontenedor">
      <div className="cards">
        {/* <Link key={id} to={"/market/" + id}> */}
        <img src={image} alt="Img not found" />
        <h3>{product_name}</h3>
        <span className="cardcost">$ {cost_by_unit}</span>
        {/* </Link> */}
        <Amount id={id} />
      </div>
    </div>
  );
}
//
