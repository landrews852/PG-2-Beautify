import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import s from "./button.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Button({ type, link, quote, amount }) {
  const dispatch = useDispatch();

  const productDetail = useSelector((state) => state.productDetail);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...productDetail, amount: amount }));
    Swal.fire({
      icon: "success",
      title: "¡Buena elección!",
      text: "Ve al carrito para ver los productos agregados",
    });
  };

  return (
    <button className={s.buttoncart} onClick={(e) => handleAddToCart()}>
      <span className={s.circle} aria-hidden="true">
        <FontAwesomeIcon icon={faCartPlus} className={s.carticon} />
      </span>
      <span className={s["button-text"]}> {quote} </span>
    </button>
  );
}
