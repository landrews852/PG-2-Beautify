import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAbout } from "../../../../redux/actions";
import s from "./aboutUs.module.css";

export default function AboutUs() {
  let about = useSelector((state) => state.about);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getAbout())
  },[])

  return about.title ? (
    <div className={s.container}>
      <div className={s.content}>
        <h1>{about.title}</h1>
        <h5>{about.description}</h5>
        <p>{about.slogan}</p>
      </div>
    </div>
  ) : (
    <div className={s.container}>
      <div className={s.content}>
        <h1>QUIENES SOMOS</h1>

        <h5>
          Somos una empresa fundada en 2011 por un grupo de personas amantes del
          cuidado personal y de potenciar nuestra mejor versión. Nos dedicamos a
          ofrecer servicios estéticos en el rubro de belleza facial, pestañas y
          cejas. De igual manera comercializamos los insumos de mayor calidad en
          el mercado para realizar dichos tratamientos de belleza.
        </h5>

        <p>
          La calidad inmejorable y nuestros testimonios, son nuestro sello de
          confianza. Mas de 10 años embelleciendo tu vida.
        </p>
      </div>
    </div>
  );
}
