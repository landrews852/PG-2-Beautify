import React from "react";
import s from "./cartCard.module.css";
import img from "../../images/logo.png";

export default function Card({ image, product_name, cost_by_unit }) {
  return (
  <div className={s.container}>
    <img className={s.img} src={img} alt="Img not found" />
    <div className={s.card}>
      <div className={s.text}>
        <h5>{product_name}</h5>
        <p>Valor: {cost_by_unit}</p>
      </div>
      <button className={s.btn}>x</button>
    </div>
  </div>
  )
}