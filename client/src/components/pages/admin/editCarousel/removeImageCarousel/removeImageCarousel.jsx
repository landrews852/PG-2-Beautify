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
    <>
    <h2>Eliminar banner del carrusel</h2>
    <div className={s.new}>
      
      {
        carrusel.length > 0 && carrusel.map((item, idx) => <CarouselCard key={item.id} id={item.id} image={item.image} idx={idx} />)
      }
    </div>
    </>
  )
}