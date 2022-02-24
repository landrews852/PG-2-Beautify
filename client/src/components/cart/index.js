import React from "react";
import Card from "../cartCard";
import s from "./Cart.module.css";
import { useSelector } from "react-redux";
import Total from "../totalCart/Total";

export default function Cart() {
  const productos = useSelector((state) => state.cart);

  return (
    <div className={s.cart}>
      <h2 className={s.title}>Carrito de compras</h2>
      {/* <div className={s.cart}> */}
      <Total />
      <div className={s.cartItems}>
        {productos.length ? (
          productos.map((p) => (
            <Card
              product_name={p.product_name}
              id={p.id}
              cost_by_unit={p.cost_by_unit}
              image={p.image}
              key={p.id}
              amount={p.amount}
              total={p.total}
            />
          ))
        ) : (
          <p>No hay productos en el carrito.</p>
        )}
      </div>
      {/* </div> */}
    </div>
  );
}
