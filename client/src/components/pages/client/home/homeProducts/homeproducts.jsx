import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../../../../redux/actions";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Card from "../../../../cards/cardHome/cardHome";
//import { useMemo } from "react";

export default function HomeProducts() {
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(allProducts());
  }, [dispatch]);

  let product = useSelector((state) => state.allProducts);

  useEffect(() => {
    dispatch(allProducts());
  }, []);

  return (
    <>
      { product !== "nothing found" ? (
        <OwlCarousel className="owl-theme" nav items={4}>
          {product?.slice(0, 10).map((p) => (
              <div class="item">
                <Card
                  id={p.id}
                  product_name={p.product_name}
                  image={p.image[0]}
                  cost_by_unit={p.cost_by_unit}
                  key={p.id}
                />
              </div>
            ))}
        </OwlCarousel>
      ) : null}
    </>
  );
}
