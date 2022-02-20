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
      img: "http://www.incontech.com.sg/wp-content/uploads/2016/06/incontech-web-banner_Beauty-Skin-Care.jpg",
      label: "Cuida tu piel con Aloe Vera",
      text: "Belleza de adentro hacia afuera",
    },
    {
      id: 3,
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.marcoaldany.com%2Fwp-content%2Fuploads%2F2018%2F09%2Fbanner-pestanas.jpg&f=1&nofb=1",
      label: "Pestañas y Cejas",
      text: "Conocé nuestras ofertas en productos y servicios",
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
