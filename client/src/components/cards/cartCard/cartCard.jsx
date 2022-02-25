import React from "react";
import s from "./cartCard.module.css";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../../redux/actions";
import Amount from "../../features/amountProduct/amountProduct";

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
              <p className={s.cost}>Cantidad : {amount}</p>
            </>
          ) : (
            <p>
              Valor: <del>{cost_by_unit}</del>
              con descuento: {total}
            </p>
          )}

          <p className={s.amount}>
            {" "}
            <Amount id={id} />{" "}
          </p>
        </div>
        <button className={s.btn} onClick={(e) => handleDelete()}>
          x
        </button>
      </div>
    </div>
  );
}
