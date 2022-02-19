import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './carousel.css';


export default function Slideshow() {
  const arrcarrusel = [
    {
      id: 1,
      img: "https://www.bellezamarife.com/wp-content/uploads/2015/11/tratamientos-antiedad-y-rejuvenecimiento-1.png",
      label: "First slide label",
      text: "Lo que sea 1 ",
    },
    {
      id: 2,
      img: "https://media.glamour.mx/photos/619051d02d97bd4c522a2691/master/w_1600,c_limit/260880.jpg",
      label: "Second slide label",
      text: "Lo que sea 2 ",
    },
    {
      id: 3,
      img: "https://www.diariodesevilla.es/2021/07/27/wappissima/belleza/seguir-rutina-belleza-facial-verano_1596150530_141807946_1200x675.jpg",
      label: "Third slide label",
      text: "Lo que sea 3 ",
    },
  ];

  return (
    <div>
      <Carousel>
        {arrcarrusel.map((e) => (
          <Carousel.Item key={e.id}>
            <img
              className="d-block w-100"
              width="100%"
              height="500vh"
              src={e.img}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{e.label}</h3>
              <p>{e.text}</p>
            </Carousel.Caption>
          </Carousel.Item> 
        ))}
      </Carousel>
    </div>
  );
}
