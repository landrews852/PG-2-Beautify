import React from "react";
import Card from "../../../cards/cartCard/cartCard";
import s from "./cart.module.css";
import { useSelector } from "react-redux";
<<<<<<< HEAD:client/src/components/cart/index.js
import Total from "../totalCart/Total";
=======
import Total from "../../../elements/totalCart/totalCart";
import Amount from "../../../features/amountProduct/amountProduct";

>>>>>>> 8a9d5bdc48c86682abbcdae7ca66503d1c76e0d4:client/src/components/pages/client/cart/cart.jsx

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
