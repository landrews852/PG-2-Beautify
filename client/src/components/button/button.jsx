import React from "react";
import s from "./button.module.css";
import { Link } from "react-router-dom";

export default function Button(link) {
  return (
    <Link to={'/'} className={s["fancy"]}>
      <span className={s["top-key"]}></span>
      <span className={s["text"]}><i class="fa-solid fa-cart-plus"></i>Agregar</span>
      <span className={s["bottom-key-1"]}></span>
      <span className={s["bottom-key-2"]}></span>
    </Link>
  );
}
