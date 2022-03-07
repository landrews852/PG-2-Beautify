import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./homeCarousel.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImgCarousel } from "../../../../../redux/actions";

export default function Slideshow() {
  const carousel = useSelector((state) => state.carrusel);
  const dispatch = useDispatch();
  const selectedCarousel = carousel.slice(0, 5);

  useEffect(() => {
    dispatch(getImgCarousel());
  }, []);

  return (
    <div>
      <Carousel>
        {selectedCarousel.length > 0 &&
          selectedCarousel.map((e) => (
            <Carousel.Item key={e.id}>
              <img
                className="d-block w-100"
                width="100%"
                height="auto"
                src={e.image}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{e.title}</h3>
                <p>{e.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
}
