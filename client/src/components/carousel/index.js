import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './carousel.css';


export default function Slideshow() {
  const arrcarrusel = [
    {
      id: 1,
      img: "https://beautysas.vteximg.com.br/arquivos/ids/176764/fragancias-1.jpg?v=637806113206470000",
      label: "Fragancias",
      text: "Aprovecha nuestra nuevas fragancias con descuento",
    },
    {
      id: 2,
      img: "https://beautysas.vteximg.com.br/arquivos/ids/176717/B24%20-%201920x580%20-%20Dylan%20Blue%20PF.jpg?v=637805376353800000",
      label: "Versace Dylan Blue ",
      text: "Homenaje a la femineidad y masculinidad",
    },
    {
      id: 3,
      img: "https://beautysas.vteximg.com.br/arquivos/ids/176628/B24%20-%201920x580%20-%20Mugler_AngelNova_Valentines.jpg?v=637799406797230000",
      label: "Angel",
      text: "Lo que estabas esperando, cae del cielo",
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
