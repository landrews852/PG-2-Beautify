import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import s from "./button.module.css";
import { Link } from "react-router-dom";


export default function Button(link) {
  return (
    <button className={s.buttoncart}>
      <span className={s.circle} aria-hidden="true">
        <FontAwesomeIcon icon={faCartPlus} className={s.carticon} />
      </span>
      <span className={s["button-text"]}> carrito</span>
    </button>
  );
}
