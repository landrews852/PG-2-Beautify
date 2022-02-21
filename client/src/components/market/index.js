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

  useEffect(() => {
    dispatch(allProducts());
  }, []);
  
  const Paginate = (page) => {
    setPage(page)
  }

  return (
    paginatedProducts.length ? ( 
<div className="main">
      <Filter Paginate = {Paginate} />
      {/* <Pagination>
        <Pagination.First onClick={firstPage}/>
        <Pagination.Prev disabled={page <= 1} onClick={() => setPage(page-1)}/>
        <Pagination.Item onClick={firstPage} hidden={page === 1 || page === 2}>{1}</Pagination.Item>
        <Pagination.Ellipsis hidden={page === 1 || lastPage <= 3 || page === 2} />

        <Pagination.Item onClick={() => setPage(page - 1)} hidden={page === 1}>{page - 1}</Pagination.Item>
        <Pagination.Item active>{page}</Pagination.Item>
        <Pagination.Item onClick={() => setPage(page + 1)} hidden={page === lastPage || lastPage === (page + 1)}>{page + 1}</Pagination.Item>

        <Pagination.Ellipsis hidden={page === lastPage || lastPage <= 3 || lastPage === page + 1} />
        <Pagination.Item onClick={() => setPage(lastPage)} hidden={page === lastPage}>{lastPage}</Pagination.Item>
        <Pagination.Next disabled={page >= lastPage} onClick={() => setPage(page + 1)}/>
        <Pagination.Last onClick={() => setPage(lastPage)}/>
      </Pagination> */}
      < Pagination  firstItem={firstItem} lastItem={lastItem} lastPage={lastPage} Paginate={Paginate} page={page}/>
      <div className="Container Market">
        { paginatedProducts.map((product) => (
            <Link key={product.id} to={"/market/" + product.id}>
              <Card
                product_name={product.product_name}
                image={product.image}
                cost_by_unit={product.cost_by_unit}
              />
            </Link>
          )) 
        }
      </div>
    </div>
    ) : (
    
    <p>No hay productos en esta categoria</p>

    ) 
  )
}
