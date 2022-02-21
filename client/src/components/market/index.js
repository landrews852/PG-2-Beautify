import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Card from "../card";
import { Link } from "react-router-dom";
import "./market.css";
import Filter from "../filter";
import { allProducts } from "../../redux/actions";
import Pagination from "../paginate/paginate";

// let allProducts = require('../../datamock/Products.json')

export default function Market() {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.products);

  let [page,setPage] = useState(1)
  let firstItem = (page - 1) * 9
  let lastItem = page * 9
  let lastPage = 1 + Math.floor(products.length/9)
  let paginatedProducts = (products !== 'nothing found') ? products.slice(firstItem,lastItem) : []

  useEffect(async () => {
    if(products.length === 0) dispatch(allProducts());
  }, []);
  
  const Paginate = (page) => {
    setPage(page)
  }

  return (
<div className="main">
  <Filter Paginate = {Paginate} />
  <br/>
    {paginatedProducts.length ?  <>
      < Pagination  firstItem={firstItem} lastItem={lastItem} lastPage={lastPage} Paginate={Paginate} page={page}/>
      <div className="Container Market">
      { paginatedProducts.map((product) => (
            <Link key={product.id} to={"/market/" + product.id}>
              <Card
                id={product.id}
                product_name={product.product_name}
                image={product.image}
                cost_by_unit={product.cost_by_unit}
              />
            </Link>
          )) 
        }
      </div>
    </>
    : <p>No se han encontrado resultados para tu busqueda</p>   }
    </div>
  )
}