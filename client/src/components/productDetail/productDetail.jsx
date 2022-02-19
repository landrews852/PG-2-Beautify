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
            <h1>Nombre</h1>
            <span className={Styles["hint-star"]}>
              {ranking_starts.map((star) => (
                <i className={`${Styles.fa} ${Styles[star]}`}></i>
              ))}
            </span>
          </div>
            <p className={Styles.information}>
              " Especially good for container gardening, the Angelonia will keep
              blooming all summer even if old flowers are removed. Once tall
              enough to cut, bring them inside and you'll notice a light scent
              that some say is reminiscent of apples. "
            </p>

            <div className={Styles.control}>
              <button className={Styles.btns}>
                <span className={Styles.price}>49 $</span>
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
              src="https://sc01.alicdn.com/kf/HTB1Cic9HFXXXXbZXpXXq6xXFXXX3/200006212/HTB1Cic9HFXXXXbZXpXXq6xXFXXX3.jpg"
              alt="Omar Dsoky"
            />

            <div className={Styles.info}>
              <h2>The Description</h2>
              <ul>
                <li>
                  <strong>Sun Needs: </strong>Full Sun
                </li>
                <li>
                  <strong>Soil Needs: </strong>Damp
                </li>
                <li>
                  <strong>Zones: </strong>9 - 11
                </li>
                <li>
                  <strong>Height: </strong>2 - 3 feet
                </li>
                <li>
                  <strong>Blooms in: </strong>Mid‑Summer - Mid‑Fall
                </li>
                <li>
                  <strong>Features: </strong>Tolerates heat
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
