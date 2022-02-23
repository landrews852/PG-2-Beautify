import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import s from "./button.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../redux/actions";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Button({ id, quote }) {
  let dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getProductDetail(id));
  };

  return (
    <button className={s.buttoncart} onClick={handleClick}>
      <span className={s.circle} aria-hidden="true">
        {/* <FontAwesomeIcon icon={faCartPlus} className={s.carticon} /> */}
      </span>
      <span className={s["button-text"]}> {quote} </span>
    </button>
  );
}
