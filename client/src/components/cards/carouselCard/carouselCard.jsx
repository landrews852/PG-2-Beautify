import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteImgCarousel } from '../../../redux/actions'
import "./carouselCard.css"

export default function CarouselCard({ id, image, idx }) {
  const dispatch = useDispatch()

  const handleClick = async () => {
    dispatch(deleteImgCarousel(id))
      .then(response => {
        if (response === "minimum images") alert("Can't have less than 2 images")
      })
  }

  return (
    <div className="cardcontenedor">
      <div className="cards">
        <img src={image} alt="Img carrusel" />
        <h3>{idx + 1}</h3>
        <div className="carouselCardButton">
          <button onClick={handleClick}>X</button>
        </div>
      </div>
    </div>
  );
}
