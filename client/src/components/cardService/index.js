import React from "react";
import Style from "./cardServices.module.css"
console.log (Style)

let services = require("../../datamock/Services.json");

export default function cardService() {
  return (
    <div id={Style.cont} >
      {services.map((service) => (
        <div id={Style.container}>
          <div className={Style['product-details']}>
            <div className={Style['title-stars']}>
              <h1>{service.name_service}</h1>

              <span className= {[Style["hint-star"], Style.star].join(' ')}>
                <i className= {[Style.fa, Style['fa-star']].join (' ')} aria-hidden="true"></i>
                <i className= {[Style.fa, Style['fa-star']].join(' ')} aria-hidden="true"></i>
                <i className= {[Style.fa, Style['fa-star']].join(' ')} aria-hidden="true"></i>
                <i className= {[Style.fa, Style['fa-star-half-o']].join(' ')} aria-hidden="true"></i>
                <i className= {[Style.fa, Style['fa-star-o']].join(' ')} aria-hidden="true"></i>
              </span>
            </div>
            <p className= {Style.information}>{service.description}</p>

            <div className= {Style.control}>
              <button className= {Style.btns}>
                <span className= {Style.price}>{service.price} $</span>
                <span className= {Style['shopping-cart']}>
                  <i className= {[Style.fa , Style['fa-shopping-cart']].join(' ')} aria-hidden="true"></i>
                </span>
                <span className= {Style.buy}>Buy Now</span>
              </button>
            </div>
          </div>

          <div className= {Style ['product-image']}>
            <img src={service.image} alt="Omar Dsoky" />
          </div>

        </div>
      ))}
    </div>
  );
}
