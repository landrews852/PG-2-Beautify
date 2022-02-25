const { Carousel } = require("../src/db.js");

const data = [
  {
    image: "https://herbalia.rs/slike/7-1.jpg",
    title: "Belleza Natural",
    description: "Potenciá tu belleza natural con el mejor cuidado",
  },
  {
    image: "https://img.freepik.com/foto-gratis/retrato-hombre-guapo-aplicando-parches-ojos_23-2149206716.jpg?w=1380",
    title: "Cuida tu piel con Aloe Vera",
    description: "Belleza de adentro hacia afuera",
  },
  {
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.marcoaldany.com%2Fwp-content%2Fuploads%2F2018%2F09%2Fbanner-pestanas.jpg&f=1&nofb=1",
    title: "Pestañas y Cejas",
    description: "Conocé nuestras ofertas en productos y servicios",
  },
];

const loadCarousel = async () => {
  try {
    await Carousel.bulkCreate(data)
  } catch (error) {
    return error;
  }
}

module.exports = {
  loadCarousel
}