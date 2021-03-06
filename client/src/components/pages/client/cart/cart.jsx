import React, { useEffect } from "react";
import Card from "../../../cards/cartCard/cartCard";
import s from "./cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import Total from "../../../elements/totalCart/totalCart";
import { deleteItem, payProducts } from "../../../../redux/actions";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";

export default function Cart() {
  const publicKey = `${process.env.REACT_APP_PUBLIC_KEY}`;
  const locale = `${process.env.REACT_APP_LOCALE}`;
  let productos = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let mercadopago;
  const { user, isAuthenticated } = useAuth0();
  console.log(user);
  const userlocal = JSON.parse(localStorage.getItem("user"));
  let Items = userlocal ? { productos: productos, user: userlocal[0] } : null;
  const handleClick = () => {
    if (!isAuthenticated) {
      return Swal.fire({
        icon: "warning",
        title: "Espera!!",
        text: "Por favor inicia sesión...",
      });
    } else if (!user.email_verified) {
      return Swal.fire({
        icon: "warning",
        title: "Espera!!",
        text: "Por favor verifica tu correo, revisa no deseados...",
      });
    } else if (!productos.length) {
      return Swal.fire({
        icon: "warning",
        title: "Espera!!",
        text: "Agrega productos al carrito...",
      });
    }
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
    }); // navigate('/order');
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
        <button onClick={handleClick}>Pagar</button>
      </div>
      <div id="test"></div>
    </div>
  );
}
