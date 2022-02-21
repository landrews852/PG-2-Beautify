import React from "react";
import CardCateServices from "../cardCateServices";
import { Link } from "react-router-dom";
import Style from "./homeservices.module.css";
let services = require("../../datamock/Categories.json");


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
