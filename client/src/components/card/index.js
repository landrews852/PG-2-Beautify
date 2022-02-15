import React from "react";


export default function Card({ image, product_name, cost_by_unit }) {
    return (
        <div className="contenedor">

            <div className="cards">
                
                <img src={image} alt="Img not found" />
                <h3>{product_name}</h3>
                <h3>{cost_by_unit}</h3>
                <button>Agregar al carrito</button>

            </div>


        </div>
    )
}