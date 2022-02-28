const { Carousel } = require("../src/db.js");

const data = [
  {
    image:
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646060173/beautify/7-1_p0ueor.jpg",
    title: "Belleza Natural",
    description: "Potenciá tu belleza natural con el mejor cuidado",
  },
  {
    image:
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646060548/beautify/img2_j3zpmq.jpg",
    title: "Cuida tu piel con Aloe Vera",
    description: "Belleza de adentro hacia afuera",
  },
  {
    image:
      "https://res.cloudinary.com/estdia/image/upload/f_auto/v1646060172/beautify/download_mfhvwr.jpg",
    title: "Pestañas y Cejas",
    description: "Conocé nuestras ofertas en productos y servicios",
  },
];

const loadCarousel = async () => {
  try {
    await Carousel.bulkCreate(data);
  } catch (error) {
    return error;
  }
};

module.exports = {
  loadCarousel,
};
