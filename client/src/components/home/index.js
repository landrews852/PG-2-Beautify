import React from "react";
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
      <h2>PRODUCTOS</h2>
<<<<<<< HEAD
      <HomeProducts />

=======
      {/* COMENTO LO DE ABAJO HASTA QUE SE CREE LA RUTA DE PRODUCTOS ASI NO SE ROMPE LA PAGINA ENTERA */}
>>>>>>> e9f0df35cfd232a989ca615536659824bccebda9

      
    </div>
  );
}

export default Home;
