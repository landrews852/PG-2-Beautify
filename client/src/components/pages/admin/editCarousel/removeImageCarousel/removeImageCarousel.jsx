import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImgCarousel } from "../../../../../redux/actions";
import CarouselCard from '../../../../cards/carouselCard/carouselCard.jsx'
import s from "./removeImageCarousel.module.css"

export default function RemoveImageCarousel() {
  const carrusel = useSelector(state => state.carrusel)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getImgCarousel())
  }, [])

  return (
    <div className={s.new}>
      <h1>ELIMINAR IMAGEN CARRUSEL</h1>
      {
        carrusel.length > 0 && carrusel.map((item, idx) => <CarouselCard key={item.id} id={item.id} image={item.image} idx={idx} />)
      }
    </div>
  )
}