import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getProductDetail,
  cleanProductDetail,
  allProducts,
} from "../../../../redux/actions";
import React from "react";
import Styles from "./productDetail.module.css";
import Amount from "../../../features/amountProduct/amountProduct";
import Reviews from "../reviews/reviews";

export default function ProductDetail() {
  let { id } = useParams();
  const dispatch = useDispatch();

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
    return dispatch(cleanProductDetail());
  }, [dispatch]);

  let productDetail = useSelector((state) => state.productDetail);
  const array = [
    {
      author: "Rodrigo",
      created: "22-10-2012",
      review: "lre asd as dpoasdasd asjdkljasdl kjasdlkas",
    },
    {
      author: "Marcos",
      created: "06-07-2018",
      review: "lre asd as dpoasdasd asjdkljasdl kjasdllre asd as dpoasdasd asjdkljasdl kjasdlkaslre asd as dpoasd lre asd as dpoasdasd asjdkljasdl kjasdlkasasd asjdkl lre asd as dpoasdasd asjdkljasdl kjasdlkasjasdl kjasdlkas lre asd as dpoasdasd asjdk lre asd as dpoasdasd asjdkljasdl kjasdlkasljasdl kjasdlkas lre asd as dpoasdasd asjdkljasdl kjasdlkaskas",
    }
  ]
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
              <Amount id={productDetail.id} />
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
         array?array.map(r => < Reviews author={r.author} created={r.created} review={r.review}/>):"Sin reviews de compradores"          
        }               
        </div>
 
      </div>
    </>
  );
}
