import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Card from "../card";
import "./market.css";
import Filter from "../filter";
import { allProducts } from "../../redux/actions";
// let allProducts = require('../../datamock/Products.json')

export default function Market() {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(allProducts());
  }, []);

  return (
    <div className="Container Market">
      <Filter />
      {products &&
        products.map((p) => (
          <Card
            product_name={p.product_name}
            image={p.image}
            cost_by_unit={p.cost_by_unit}
          />
        ))}
    </div>
  );
}
