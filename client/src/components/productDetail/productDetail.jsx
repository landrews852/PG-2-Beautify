import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getProductDetail,
  cleanProductDetail,
  allProducts,
} from "../../redux/actions";
import React from "react";
// import "./cardServices.css";
// let products = require("../../datamock/Products.json");

export default function ProductDetail() {
  let { id } = useParams();
  const dispatch = useDispatch();
  // let productDetail = useSelector(state => state.productDetail)

  const ranking = 2.5;
  let ranking_starts = [1, 2, 3, 4, 5];
  // Ranking dinamico para estrellas.
  ranking_starts = ranking_starts.map((rank) => {
    if (rank < ranking) return "fa fa-star";
    if (rank - ranking === 0.5) return "fa fa-star-half-o";
    if (ranking - rank < 0) return "fa fa-star-o";
  });

  console.log(ranking_starts);

  // useEffect(() => {
  //   dispatch(getProductDetail(id));
  //   return dispatch(cleanProductDetail());
  // }, []);

  let products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(allProducts());
  }, []);

  // Para fines de mostrar informacion extraigo del producto del datamock
  let productDetail = products.find((product) => product.id == id);

  return (
    <>
      <div id="cont">
        <div id="container">
          <div class="product-details">
            <div class="title-stars">
              <h1>{productDetail.product_name}</h1>

              <span className="hint-star star">
                {ranking_starts.map((start) => (
                  <i className={start}></i>
                ))}
              </span>

              <span>{productDetail.brand}</span>
            </div>
            <p class="information">{productDetail.description}</p>
            <p class="information">{productDetail.category.name_category}</p>
            <p class="information">{productDetail.country}</p>
            <p class="information">{productDetail.discount}</p>
            {/* <p class="information">{productDetail.expiration_date}</p> */}
            <p class="information">{productDetail.stock}</p>
            <p class="information">{productDetail.warranty}</p>
            <div class="control">
              <button class="btns">
                <span class="price">{productDetail.cost_by_unit} $</span>
                <span class="shopping-cart">
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </span>
                <span class="buy">Buy Now</span>
              </button>
            </div>
          </div>

          <div class="product-image">
            {productDetail.image.map((img) => (
              <img src={img} alt="fotico_papa"></img>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
