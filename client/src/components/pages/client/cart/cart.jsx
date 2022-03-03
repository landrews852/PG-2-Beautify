import React, { useEffect } from "react";
import Card from "../../../cards/cartCard/cartCard";
import s from "./cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import Total from "../../../elements/totalCart/totalCart";
import { deleteItem, payProducts } from "../../../../redux/actions";
import { Navigate, useNavigate } from "react-router-dom";

export default function Cart() {
  const publicKey = `${process.env.REACT_APP_PUBLIC_KEY}`
  const productos = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let mercadopago
  const navigate = useNavigate();
  
  const handleClick = () => {
    const script = document.createElement('script')
    script.type = "text/javascript"
    script.src = "https://sdk.mercadopago.com/js/v2";
    script.addEventListener('load', ()=> {
      mercadopago = new window.MercadoPago(publicKey, {
        locale: "es-PE"
      })
    });
    document.body.appendChild(script);
    console.log("agregado")
      dispatch(payProducts(productos))
      .then(res => {
        console.log(res)
        console.log(res.data.id)
        mercadopago.checkout({
          preference: {
              id: res.data.id
          },
          autoOpen: true
        })
      })
    
    navigate('/order');
  }

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
      <div id="test">
      </div>
    </div>
  );
}
