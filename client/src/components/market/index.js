import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Card from "../card";
import { Link } from "react-router-dom";
import "./market.css";
import Filter from "../filter";
import { allProducts } from "../../redux/actions";
import { Pagination } from 'react-bootstrap'
// let allProducts = require('../../datamock/Products.json')

export default function Market() {
  const dispatch = useDispatch();
  let [firstPage,setPage] = useState(0)
  let [lastPage,setLastPage] = useState(9)

  let products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(allProducts());
  }, []);

  let actualProducts = products.slice(firstPage,lastPage)

  return (
    <div className="main">
      <Filter />
      <div className="Container Market">
        {actualProducts?.map((product) => (
            <Link key={product.id} to={"/market/" + product.id}>
              <Card
                product_name={product.product_name}
                image={product.image}
                cost_by_unit={product.cost_by_unit}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
