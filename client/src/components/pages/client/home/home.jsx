import React from "react";
import "./home.css"
import Slideshow from "./homeCarousel/homeCarousel";
import Homeservices from "./homeService/homeService";
import HomeProducts from "./homeProducts/homeproducts";

function Home() {
  

  return (
    <div className="home">
      <Slideshow />
      <Homeservices />
      <h2>PRODUCTOS</h2>

      <HomeProducts />      

    </div>
  );
}

export default Home;
