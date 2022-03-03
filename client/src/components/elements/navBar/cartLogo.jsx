import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./navBar.module.css";
import logo from "../../../images/logo_calendar.png";

export default function CartLogo() {
  const cart = useSelector((state) => state.cart);

  const numItems = cart.length;

  return (
    <div className={s.cart}>
      <Link to="/cart">
        <div className={s.div_cart}>
          <img
            src="https://res.cloudinary.com/estdia/image/upload/f_auto/v1646078438/beautify/form/carrito2_jbjxp8.png"
            alt="cart_logo"
            className={s.cart_img}
          />
          <div className={s.cart_num}>
            <p className={s.num_items}>{numItems}</p>
          </div>
        </div>
      </Link>
      {/* <Link to="/calendario">
        <div className={s.div_cart}>
          <img
            src={logo}
            alt="calendar_logo"
            className={s.cart_img}
          />
        </div>
      </Link> */}
    </div>
  );
}
