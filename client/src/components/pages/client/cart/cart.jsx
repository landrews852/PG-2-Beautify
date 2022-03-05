import React from "react";
import Card from "../../../cards/cartCard/cartCard";
import s from "./cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import Total from "../../../elements/totalCart/totalCart";
import { payProducts } from "../../../../redux/actions";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const publicKey = `${process.env.REACT_APP_PUBLIC_KEY}`;
  const locale = `${process.env.REACT_APP_LOCALE}`;
  let productos = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let mercadopago;
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  let Items = { productos: productos, user: user[0] };
  const handleClick = () => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://sdk.mercadopago.com/js/v2";
    script.addEventListener("load", () => {
      mercadopago = new window.MercadoPago(publicKey, {
        locale: locale,
      });
    });
    document.body.appendChild(script);

    dispatch(payProducts(Items)).then((res) => {
      mercadopago.checkout({
        preference: {
          id: res.data.id,
        },
        autoOpen: true,
      });
    });

    // navigate('/order');
  };

  return (
    <div className={s.cart}>
      <h2 className={s.title}>Carrito de compras</h2>
      {/* <div className={s.cart}> */}
      <div className={s.cartItems}>
        {productos.length ? (
          productos.map((p) => (
            <Card
              product_name={p.product_name}
              id={p.id}
              cost_by_unit={p.cost_by_unit}
              image={p.image[0]}
              key={p.id}
              amount={p.amount}
              total={p.total}
              stock={p.stock}
            />
          ))
        ) : (
          <p>No hay productos en el carrito.</p>
        )}
        <div className={s.total}>
          <Total />
        </div>
      </div>
      {/* </div> */}
      <div>
        <button onClick={handleClick}>Pagar</button>
      </div>
      <div id="test"></div>
    </div>
  );
}
