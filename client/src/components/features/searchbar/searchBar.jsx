import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsbyName, getServicesbyName } from "../../../redux/actions";
import s from "./searchBar.module.css";
import { useLocation } from "react-router-dom";

export default function SearchBar() {
  const dispatch = useDispatch();
  const location = useLocation();

  const [name, setName] = useState(""); // aca se va a guardar lo q vaya escribiendo el usuario

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (location.pathname === "/market") {
      dispatch(getProductsbyName(name));
      setName("");
    }
    if (location.pathname === "/services") {
      dispatch(getServicesbyName(name));
      setName("");
    }
  };

  return (
    <div className={s.searchBar}>
      <input
        className={s.input}
        value={name}
        type="text"
        placeholder="Buscar"
        onChange={(e) => handleInputChange(e)}
      />

      <button
        className={s.btn}
        type="submit"
        onClick={(e) => handleSubmit(e)}
      ></button>
    </div>
  );
}
