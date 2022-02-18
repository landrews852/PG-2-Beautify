import React from "react";
import s from "./cartCard.module.css";

export default function Card({ image, product_name, cost_by_unit }) {
  return (
    <div className={s.container}>
      <div className={s.card}>
        <img className={s.img} src={image[0]} alt="Img not found" />
        <h5>{product_name}</h5>
        <p>Valor: {cost_by_unit}</p>
      </div>
      <button className={s.btn}>Quitar del carrito</button>
    </div>
  );
}
