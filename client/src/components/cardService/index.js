import React from 'react'
import Style from './cardServices.module.css'
let services = require("../../datamock/Services.json");

export default function cardService() {
  let service= services.slice (0,8)
  return (
    <div className={Style.cont} >
      {
        service.map ((service)=>(
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
    </div>
  )
}
