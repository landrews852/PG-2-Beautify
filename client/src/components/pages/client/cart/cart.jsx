import React, { useEffect } from "react";
import Card from "../../../cards/cartCard/cartCard";
import s from "./cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import Total from "../../../elements/totalCart/totalCart";
import { deleteItem, payProducts } from "../../../../redux/actions";
import { useMercadopago } from "react-sdk-mercadopago";

export default function Cart() {
  const productos = useSelector((state) => state.cart);
  console.log(productos);
  const dispatch = useDispatch();
  const mercadopago = useMercadopago.v2(
    "TEST-cb9b9b61-ff85-42dc-95eb-12aadba13dfc",
    {
      locale: "es-CO",
    }
  );

  const handleClick = () => {
    dispatch(payProducts(productos)).then((res) => {
      console.log(res.data.id);
      mercadopago.checkout({
        preference: {
          // id: 'YOUR_PREFERENCE_ID'
          id: res.data.id,
        },
        autoOpen: true,
      });
    });
    // pago.open()
  };

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
                image={p.image[0]}
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
      <div>
        <button onClick={handleClick}>Pagar todo</button>
      </div>
    </div>
  );
}
