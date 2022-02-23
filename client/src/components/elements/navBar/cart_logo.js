import React from "react";
import { Link } from "react-router-dom";
import carrito from '../../../images/carrito2.png';
import { useSelector } from "react-redux";
import s from "./navBar.module.css";


export default function Cart_logo() {

  const cart = useSelector(state => state.cart);

  const numItems = cart.length;

  return (
    <div className={s.cart}>
      <Link to="/cart">
        <div className={s.div_cart}>
          <img src={carrito} alt="cart_logo" className={s.cart_img} />
          <div className={s.cart_num}>
            <p className={s.num_items}>{numItems}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}