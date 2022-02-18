import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../card";
import Slideshow from "../carousel";
import "./home.css"
import Homeservices from "../homeservices";
import HomeProducts from "../homeproducts/homeproducts";
// let allProducts = require('../../datamock/Products.json')

function Home() {
  

  return (
    <div className="home">
      <Slideshow />
      <Homeservices />
<<<<<<< HEAD
      <h2>Products</h2>
      <HomeProducts />
=======
      <h2>PRODUCTOS</h2>
      {/* COMENTO LO DE ABAJO HASTA QUE SE CREE LA RUTA DE PRODUCTOS ASI NO SE ROMPE LA PAGINA ENTERA */}
>>>>>>> be93ac45aee86931930ea382518bc52376e1de1f

      
    </div>
  );
}

export default Home;
