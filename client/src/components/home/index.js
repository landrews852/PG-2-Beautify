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
      <h2>Products</h2>
      <HomeProducts />

      
    </div>
  );
}

export default Home;
