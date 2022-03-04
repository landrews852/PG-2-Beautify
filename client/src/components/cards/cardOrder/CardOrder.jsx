import React from "react";

function CardOrder({ product_name, cost_by_unit, amount, direction }) {
  return (
    <div>
      <div>
        <img src={image} alt="Img not found" />
        <span>{product_name}</span>
        <span>$ {cost_by_unit}</span>
        <span>{amount}</span>
        <span>{direction}</span>
      </div>
    </div>
  );
}

export default CardOrder;
