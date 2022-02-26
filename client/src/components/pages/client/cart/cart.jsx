import React from "react";
import Card from "../../../cards/cartCard/cartCard";
import s from "./cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import Total from "../../../elements/totalCart/totalCart";
import { deleteItem } from "../../../../redux/actions";

export default function Cart() {
  const productos = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className={s.cart}>
      <h2 className={s.title}>Carrito de compras</h2>
      {/* <div className={s.cart}> */}
      <div className={s.cartItems}>
        {productos.length ? (
          productos.map((p) =>
            p.amount !== 0 ? (
              <Card
                product_name={p.product_name}
                id={p.id}
                cost_by_unit={p.cost_by_unit}
                image={p.image}
                key={p.id}
                amount={p.amount}
                total={p.total}
              />
            ) : (
              dispatch(deleteItem(p.id))
            )
          )
        ) : (
          <p>No hay productos en el carrito.</p>
        )}
        <div className={s.total}>
          <Total />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
