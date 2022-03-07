import React from "react";
import s from "./cardOrder.module.css";

function CardOrder({ total_amount, address, order_date, id, status, getDetail }) {


  return (
    <>
      <div className={s.container} onClick={() => getDetail(id)}>
          <div className={s.containerorder}>
          <div className={s.containerdata}>
            <label>id de la orden</label>
            <div className={s.orderId}>
              {id}
            </div>
          </div>
          <div className={s.containerdata}>
              <label>Fecha</label>
              <div className={s.date}>
                {order_date.slice(0,10)}
              </div>
            </div> 
            <div className={s.containerdata}>
                <label>Hora</label>
                <div className={s.time}>
                  {order_date.slice(11,19)}  
                </div>
            </div>
            <div className={s.containerdata}>
              <label>Total</label>
              <div className={s.total}>
                {total_amount}
              </div>
            </div>
            <div className={s.containerdata}>  
              <label>Estado</label>
              <div className={s.status}>
                {status}
              </div>
            </div>  
          </div> 
        </div>     
    </>
  );
}

export default CardOrder;
