import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import s from "./button.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions";
import Swal from "sweetalert2";
import { useLocalStorage } from "../localStorage/useLocalStorage";

export default function MarketButton({ amount, id }) {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);
  const productsCart = useSelector((state) => state.cart);
  const product = products.find((p) => p.id === id);

  const [cartLocal, setCartLocal] = useState(
    window.localStorage.getItem("cartLocal")
  );

  const setLocalStorage = (value) => {
    try {
      setCartLocal(value);
      window.localStorage.setItem("cartLocal", value);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart({ ...product, amount: amount }));
    setLocalStorage(productsCart);
    Swal.fire({
      icon: "success",
      title: "¡Buena elección!",
      text: "Ve al carrito para ver los productos agregados",
    });
  };
  console.log(cartLocal);

  return (
    <>
      <button className={s.buttoncart} onClick={(e) => handleAddToCart(e)}>
        <span className={s["button-text"]}> Agregar al carrito </span>
      </button>
    </>
  );
}
