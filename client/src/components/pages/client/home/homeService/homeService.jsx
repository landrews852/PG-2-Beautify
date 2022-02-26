import React from "react";
import CardCateServices from "../../../../cards/cardCateServices/cardCateServices";
import { Link } from "react-router-dom";
import Style from "./homeServices.module.css";

function index() {
  return (
    <>
      <h2 className={Style.services}>SERVICIOS</h2>
      <div className={Style.contenedor}>            
            <CardCateServices />
      </div>
    </>
  );
}

export default index;
