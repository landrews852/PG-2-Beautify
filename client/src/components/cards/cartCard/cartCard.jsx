import React from "react";
import s from "./cartCard.module.css";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../../redux/actions";
import Amount from "../../features/amountProduct/amountProduct";
import AmountCart from "../../features/amountProduct/amountProduct";
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
      <div>
        <img className={s.img} src={image} alt="Img not found" />
      </div>
      <div className={s.product_name_container}>
        <h5 className={s.product_name}>{product_name}</h5>
      </div>
      <div className={s.amount}>
        {location.pathname === "/cart" ? (
          <AmountCart id={id} amountCart={amount} stock={stock} cart={true} />
        ) : (
          <Amount id={id} amount={amount} stock={stock} />
        )}
      </div>
      <br/>
      <div  className={s.cost_container}>
        {cost_by_unit === total ? (
          <>
            <p className={s.cost}>$ {cost_by_unit}</p>
          </>
        ) : (
          <div>
            <p>
              $ <del>{cost_by_unit}</del>
            </p>
            <p>Con descuento: $ {total}</p>
          </div>
        )}
      </div>
      <div className={s.btn_container}>
        <button className={s.btn} onClick={(e) => handleDelete()}>
          Quitar
        </button>
      </div>
    </div>
  );
}
