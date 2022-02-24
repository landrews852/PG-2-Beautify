import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../../../../redux/actions";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import Card from "../../../../cards/productCard/productCard";
import { useMemo } from "react";

export default function HomeProducts() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(allProducts());
  // },[]);

  let product = useSelector((state) => state.products);

  useMemo(() => {
    dispatch(allProducts());
  }, [dispatch]);

  return (
    <>
      {
        <OwlCarousel className="owl-theme" loop margin={10} nav>
          {product !== "nothing found" &&
            product.slice(0, 10).map((p) => (
              
                <div class="item">
                  <Card
                    id={p.id}
                    product_name={p.product_name}
                    image={p.image}
                    cost_by_unit={p.cost_by_unit}
                  />
                </div>
              
            ))}
        </OwlCarousel>
      }
    </>
  );
}
