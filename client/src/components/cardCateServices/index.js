import React, { useEffect, useState } from "react";
import Style from './cardCateServices.module.css'
import { useDispatch, useSelector } from "react-redux"
import { getCategories } from "../../redux/actions";



export default function CardCateServices() {

    const dispatch = useDispatch ()
    useEffect (()=>{
        dispatch(getCategories());
    },[]);
    const categories= useSelector ((state)=>state.categories)



   return ( <section class="content-wrapper">
<ul id="accordion">
    <li class="acc-item">
        <div class="acc-item_content">
            <h3>FACIAL</h3>
            <p>Limpiezas faciales, extracciones, peeling, mesoterapia, hilos tensores y muchos más! Descubrí nuestra variedad de tratamientos faciales para revivir tu piel como nunca antes. Contamos con profesionales calificados y productos de primera calidad. Te estamos esperando!</p>
        </div>
    </li>
    <li class="acc-item">
        <div class="acc-item_content">
            <h3>PESTAÑAS</h3>
            <p>Lifting y tinte de pestañas, extensiones de pestañas y más. Las pestañas que siempre soñaste las encontras en Beautify! Contamos con todos los volumenes y curvaturas del mercado. Cambia tu mirada HOY, elige tus favoritas y contactanos!
        </p>
        </div>
    </li>
    <li class="acc-item">
        <div class="acc-item_content">
            <h3>CEJAS</h3>
            <p>Microblading, laminado, tinte y diseño de cejas. Elige tu método preferido y nuestros profesionales se encargarán de brindarte un servicio personalizado según tu rostro. Observa más detalles en nuestra web!</p>
        </div>
    </li>
</ul>

</section>
 /*    return (
            <div className={Style.cards}>               
                <img src={img} alt="Img not found"/>
                <h3>{servicio}</h3>
            </div>

    ) */)
}

