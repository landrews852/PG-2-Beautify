import React from "react";
import s from "./cartCard.module.css";
import img from "../../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../redux/actions";
import Amount from "../amountProduc/Amount";

export default function Card({
  image,
  product_name,
  cost_by_unit,
  id,
  amount,
  total,
}) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    // setGame({
    //   ...cart,
    //   cart: cart.id.filter((p) => p !== e),
    // });
    if (id) {
      dispatch(deleteItem(id));
      console.log(id);
    }
  };
  return (
    <div className={s.container}>
      <img className={s.image} src={image} alt="Img not found" />
      <div className={s.card}>
        <div className={s.text}>
          <h5>{product_name}</h5>
          {cost_by_unit === total ? (
            <p>Valor:{cost_by_unit}</p>
          ) : (
            <p>
              Valor: <del>{cost_by_unit}</del>
              con descuento: {total}
            </p>
          )}

          <p>Cantidad : {amount}</p>
        </div>
        <button className={s.btn} onClick={(e) => handleDelete()}>
          x
        </button>
      </div>
    </div>
  );
}
