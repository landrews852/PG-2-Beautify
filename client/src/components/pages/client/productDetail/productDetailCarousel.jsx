import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../../../redux/actions";

export default function Slideshow() {
  const productDetail = useSelector((state) => state.productDetail);
  const dispatch = useDispatch();
  
  console.log("productDetail", productDetail);

  const productImg = productDetail.image
  useEffect(() => {
    dispatch(getProductDetail());
  }, []);

  return (
    <div>
      <Carousel>
        {productImg?
          productImg.map((e) => (
            <Carousel.Item key={e}>
              <img
                // className="d-block w-100"
                src={e}
                alt="carousel_image"
              />
            </Carousel.Item>
          )):null}
      </Carousel>
    </div>
  );
}
