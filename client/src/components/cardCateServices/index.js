import React from "react";


export default function CardCateServices({img,servicio}) {
    return (
        <div className="contenedor">

            <div className="cards">               
                <img src={img} alt="Img not found"/>
                <h3>{servicio}</h3>
            </div>
        </div>
    )
}