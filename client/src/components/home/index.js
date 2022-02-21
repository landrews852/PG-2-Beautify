import React from "react";
import Slideshow from "../carousel";
import "./home.css"
import Homeservices from "../homeservices";
import HomeProducts from "../homeproducts/homeproducts";

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
