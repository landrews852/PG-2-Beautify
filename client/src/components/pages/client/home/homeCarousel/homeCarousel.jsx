import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './homeCarousel.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getImgCarousel } from "../../../../../redux/actions";
// import img1 from "./imgCarousel/img1.jpg"
// import img2 from "./imgCarousel/img2.jpg"

export default function Slideshow() {
  // const arrcarrusel = [
  //   {
  //     id: 1,
  //     img: img1,
  //     label: "Belleza Natural",
  //     text: "Potenciá tu belleza natural con el mejor cuidado",
  //   },
  //   {
  //     id: 2,
  //     img: img2,
  //     label: "Cuida tu piel con Aloe Vera",
  //     text: "Belleza de adentro hacia afuera",
  //   },
  //   {
  //     id: 3,
  //     img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.marcoaldany.com%2Fwp-content%2Fuploads%2F2018%2F09%2Fbanner-pestanas.jpg&f=1&nofb=1",
  //     label: "Pestañas y Cejas",
  //     text: "Conocé nuestras ofertas en productos y servicios",
  //   },
  // ];
  const carousel = useSelector(state => state.carrusel)
  const dispatch = useDispatch()
  const selectedCarousel = carousel.slice(0, 5)

  useEffect(() => {
    dispatch(getImgCarousel())
  }, [])

  return (
    <div>
      <Carousel>
        {selectedCarousel.length > 0 && selectedCarousel.map((e) => (
          <Carousel.Item key={e.id}>
            <img
              className="d-block w-100"
              width="100%"
              height="600px"
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
