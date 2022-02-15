import React from "react";


export default function CardServices({img,nameservice}) {
    return (
        <div className="contenedor">
            <div className="cards">               
                <img src={img} alt="Img not found"/>
                <h3>{nameservice}</h3>
            </div>
        </div>
    )
}