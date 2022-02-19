import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductDetail, cleanProductDetail } from "../../redux/actions";
import React from "react";
import Styles from "./productDetail.module.css";
// let products = require("../../datamock/Products.json");

export default function ProductDetail() {
  let { id } = useParams();
  const dispatch = useDispatch();
  // let productDetail = useSelector(state => state.productDetail)

  const ranking = 2.5;
  let ranking_starts = [1, 2, 3, 4, 5];
  // Ranking dinamico para estrellas.
  ranking_starts = ranking_starts.map((rank) => {
    if (rank < ranking) return "fa-star";
    if (rank - ranking === 0.5) return "fa-star-half-o";
    if (ranking - rank < 0) return "fa-star-o";
  });

  let products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductDetail());
    //  return dispatch(cleanProductDetail());
  }, []);

  // Para fines de mostrar informacion extraigo del producto del datamock
  let productDetail = products.find((product) => product.id == id);

  return (
    <>
      <div className={Styles.ProductDetail}>
        <div className={Styles.container}>
          <div className={Styles["product-details"]}>
          <div className={Styles['title-stars']}>
            <h1>{productDetail.product_name}</h1>
            <span className={Styles["hint-star"]}>
              {ranking_starts.map((star) => (
                <i className={`${Styles.fa} ${Styles[star]}`}></i>
              ))}
            </span>
          </div>
            <p className={Styles.information}>
              {productDetail.description}
            </p>

            <div className={Styles.control}>
              <button className={Styles.btns}>
                <span className={Styles.price}>{productDetail.cost_by_unit} $</span>
                <span className={Styles["shopping-cart"]}>
                  <i
                    className={`${Styles.fa} ${Styles["fa-shopping-cart"]}`}
                    aria-hidden="true"
                  ></i>
                </span>
                <span className={Styles.buy}>Buy Now</span>
              </button>
            </div>
          </div>

          <div className={Styles["product-image"]}>
            <img
              src={productDetail.image}
              alt="Omar Dsoky"
            />

            <div className={Styles.info}>
              <h2>¿Te interesa?</h2>
              <ul>
                <li>
                  <strong>Tenemos: </strong>{productDetail.stock} items disponibles
                </li>
                <li>
                  <strong>A un precio de: </strong> {productDetail.cost_by_unit}$ c/u
                </li>
                {(productDetail.discount > 0) && <li>
                  <strong>Ahorra un: </strong> {productDetail.discount}% con esta compra
                </li>}
                <li>
                  <strong>Marca: </strong> {productDetail.brand}
                </li>
                <li>
                  <strong>Garantia por: </strong> {productDetail.warranty} semanas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
