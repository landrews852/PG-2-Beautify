import React from "react";
import "./cardServices.css";
let services = require("../../datamock/Services.json");
export default function cardService() {
  return (
    /*     <div className={Style.cont} >
      {
        services.map ((service)=>(
      <div className={Style.cont2}>
        <img src={service.image} alt='Not found'/>
        <h2>{service.name_service}</h2>
        <p>{service.description}</p>
        <div>
          <label>Cost:{' '+ service.price}</label>
          <button>AGENDAR</button>
        </div>
      </div>
        ))
      }
    </div> */
    <div /* className={Style.cont} */>
      { services.map ((service)=>(

        <div id="container">
        <div class="product-details">
        
          <div class='title-stars' >
          <h1>{service.name_service}</h1>

          <span class="hint-star star">
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-half-o" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>
          </span>

          </div>
          <p class="information">
          {service.description}
          </p>

          <div class="control">
            <button class="btns">
              <span class="price">{service.price} $</span>
              <span class="shopping-cart">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
              </span>
              <span class="buy">Buy Now</span>
            </button>
          </div>
        </div>

        <div class="product-image">
          <img
            src={service.image}
            alt="Omar Dsoky"
            />
        </div>
        </div>
      ))}
    </div>
  );
}
