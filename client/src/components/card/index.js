import React from "react";
import "./card.css";
import Button from "../button/ButtonDetails";

import Amount from "../amountProduc/Amount";

export default function Card({ image, product_name, cost_by_unit, id }) {
  return (
    <div className="cardcontenedor">
      <div className="cards">
        {/* <Link key={id} to={"/market/" + id}> */}
        <img src={image} alt="Img not found" />
        <h3>{product_name}</h3>
        <span className="cardcost">$ {cost_by_unit}</span>
        {/* </Link> */}
        <Button id={id} quote={"ver mas"} />
        <Amount id={id} />
      </div>
    </div>
  );
}
//
