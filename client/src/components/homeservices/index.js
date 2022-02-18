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
        {services &&
          services.slice(0, 3).map((e) => (
            // <Link key={e.id_service} to ={'home/service'+ e.id_service}>
            <CardCateServices img={e.image} key={e.id} servicio={e.name_category}/>
            // </Link>
          ))}
      </div>
    </>
  );
}

export default index;
