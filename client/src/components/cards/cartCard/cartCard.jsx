import React from "react";
import s from "./cartCard.module.css";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../../redux/actions";
import Amount from "../../features/amountProduct/amountProduct";
import AmountCart from "../../features/amountProduct/amountProductCart";
import { useLocation } from "react-router-dom";

export default function Card({
  image,
  product_name,
  cost_by_unit,
  id,
  amount,
  total,
  stock,
}) {
  const dispatch = useDispatch();
  const location = useLocation();
  const handleDelete = () => {
    if (id) {
      dispatch(deleteItem(id));
    }
  };
  return (
    <div className={s.container}>
      <img className={s.image} src={image} alt="Img not found" />
      <div className={s.card}>
        <div className={s.text}>
          <h5 className={s.product_name}>{product_name}</h5>
          {cost_by_unit === total ? (
            <>
              <p className={s.cost}>$ {cost_by_unit}</p>
            </>
          ) : (
            <div className={s.cost}>
              <p>
                Valor: <del>{cost_by_unit}</del>
              </p>
              <p>on descuento: {total}</p>
            </div>
          )}

          <p className={s.amount}>
            {location.pathname === "/cart" ? (
              <AmountCart id={id} amount={amount} stock={stock} />
            ) : (
              <Amount id={id} />
            )}
          </p>
        </div>
        <button className={s.btn} onClick={(e) => handleDelete()}>
          x
        </button>
      </div>
    </div>
  );
}
