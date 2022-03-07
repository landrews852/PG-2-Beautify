import React from "react";
import { Link } from "react-router-dom";
import s from "./productCard.module.css";
import Amount from "../../features/amountProduct/amountProduct";

export default function Card({ image, product_name, cost_by_unit, id, stock }) {
  return (
    <div className={s.cardcontenedor}>
      <div className={s.cards}>
        <Link key={id} to={"/market/" + id}>
          <img src={image[0]} alt="Img not found" />

          <h3>{product_name}</h3>
        </Link>
        <span className={s.cardcost}>$ {cost_by_unit}</span>
        <div className={s.amount}>
          <Amount id={id} stock={stock} />
        </div>
        {/* <div className={s.button}><Button amount = {amount} id={id}/></div> */}
      </div>
    </div>
  );
}
//
