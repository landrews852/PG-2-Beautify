import React from "react";
import s from "./cardHome.module.css";
import { Link } from "react-router-dom";

export default function Card({ image, product_name, cost_by_unit, id }) {
  return (
    <div className={s.cardcontenedor}>
      <div className={s.cards}>
        <Link key={id} to={"/market/" + id}>
          <img src={image} alt="Img not found" />
          <h3 className={s.h3}>{product_name}</h3>
          <span className={s.cardcost}>$ {cost_by_unit}</span>
        </Link>
      </div>
    </div>
  );
}
