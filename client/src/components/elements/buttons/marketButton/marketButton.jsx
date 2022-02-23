import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import s from "./button.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../redux/actions";
import Swal from "sweetalert2";

export default function MarketButton({ amount, id }) {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  const product = products.find((p) => p.id === id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    console.log("Agregar al carrito", product);
    dispatch(addToCart({ ...product, amount: amount }));
    Swal.fire({
      icon: "success",
      title: "¡Buena elección!",
      text: "Ve al carrito para ver los productos agregados",
    });
  };

  return (
    <>
      <button className={s.buttoncart} onClick={(e) => handleAddToCart(e)}>
        <span className={s["button-text"]}> Agregar al carrito </span>
      </button>
    </>
  );
}
