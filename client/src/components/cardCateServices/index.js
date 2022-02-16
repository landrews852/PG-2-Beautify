import React from "react";
import Style from './cardCateServices.module.css'


export default function CardCateServices({img,servicio}) {
    return (
            <div className={Style.cards}>               
                <img src={img} alt="Img not found"/>
                <h3>{servicio}</h3>
            </div>

    )
}