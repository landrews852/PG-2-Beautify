import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getProductDetail,
  cleanProductDetail,
  allProducts,
  getReviews,
} from "../../../../redux/actions";
import React from "react";
import Styles from "./productDetail.module.css";
import Amount from "../../../features/amountProduct/amountProduct";
import Reviews from "../reviews/reviews";

export default function ProductDetail() {
  let { id } = useParams();
  const dispatch = useDispatch();

  //REVIEWS STATE//
  const reviews = useSelector(state => state.reviews)

  const sortAsc = (a,b) => {
    if (a.createdAt > b.createdAt) return -1
    else if (a.createdAt < b.createdAt) return 1
    else return 0   
  }
  reviews.sort(sortAsc)

  const ranking = 2.5;
  let ranking_starts = [1, 2, 3, 4, 5];
  // Ranking dinamico para estrellas.
  ranking_starts = ranking_starts.map((rank) => {
    if (rank < ranking) return "fa-star";
    if (rank - ranking === 0.5) return "fa-star-half-o";
    if (ranking - rank < 0) return "fa-star-o";
  });

  useEffect(() => {
    dispatch(getProductDetail(id));
    dispatch(allProducts());
    dispatch(getReviews(id));
    return dispatch(cleanProductDetail());
  }, [dispatch]);

  let productDetail = useSelector((state) => state.productDetail);
  
  return (
    <>
      <div className={Styles.ProductDetail}>
        <div className={Styles.container}>
          <div className={Styles["product-image"]}>
            <img
              src={
                Array.isArray(productDetail.image) === true
                  ? productDetail.image[0]
                  : null
              }
              alt="img no found"
            />
          </div>
          <div className={Styles["product-details"]}>
            <div className={Styles["title-stars"]}>
              <h1>{productDetail.product_name}</h1>
              <span className={Styles["hint-star"]}>
                {ranking_starts.map((star) => (
                  <i className={`${Styles.fa} ${Styles[star]}`}></i>
                ))}
              </span>
            </div>
            <p className={Styles.information}>{productDetail.description}</p>
            <div className={Styles.cost}>$ {productDetail.cost_by_unit}</div>
            <div className={Styles.control}>
              <Amount id={productDetail.id} stock={productDetail.stock} />
            </div>
          </div>
          <div className={Styles.moredetails}>
          <div className={Styles.more}>
            <p>MÁS INFORMACIÓN</p>
          </div>
          <div className={Styles.info}>
            <ul>
              <li>
                <strong>STOCK: </strong>
                {productDetail.stock} items disponibles
              </li>
              {productDetail.discount > 0 && (
              <li>
                  <strong>Ahorra un: </strong> {productDetail.discount}% con esta
                  compra
              </li>
              )}
              <li>
                <strong>Marca: </strong> {productDetail.brand}
              </li>
              <li>
                <strong>Garantia: </strong> {productDetail.warranty} semanas
              </li>
            </ul>
          </div>
        </div>           
      </div>      
      <div className={Styles.reviews}>
        <h2>Reviews</h2>
        {
         reviews.length?reviews.map(r => < Reviews author={r.client.name_client} created={r.createdAt} rank={r.rank} review={r.comment}/>):"Sin reviews de compradores"          
        }               
        </div>
 
      </div>
    </>
  );
}
