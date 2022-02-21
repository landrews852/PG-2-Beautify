import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import s from "./button.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions";
import { Link } from "react-router-dom";


export default function marketButton({type, link, quote}) {

  // const dispatch = useDispatch();

  // const productDetail = useSelector(state => state.productDetail);
  // const cart = useSelector(state => state.cart);

  // const handleAddToCart = () => {
  //   console.log("Agregar al carrito", productDetail);
  //   dispatch(addToCart(productDetail));
  //   // alert("Agregado")
  // };

  return (
    <button className={s.buttoncart} >
      <span className={s.circle} aria-hidden="true">
        <FontAwesomeIcon icon={faCartPlus} className={s.carticon} />
      </span>
      <span className={s["button-text"]}> {quote} </span>
    </button>
  );
}
