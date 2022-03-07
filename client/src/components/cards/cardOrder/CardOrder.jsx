import React from "react";
import ModalComp from "../../elements/modal/modal";
import s from "./cardOrder.module.css";

function CardOrder({ total_amount, address, order_date, id, status, getDetail }) {


  return (
    <>
      <div className={s.container} onClick={() => getDetail(id)}>
        <div className={s.orderId}>
          {id}
        </div>
        <div className={s.date}>
          {order_date.slice(0,10)}
        </div>
        <div className={s.time}>
          {order_date.slice(11,19)}  
        </div>
        <div className={s.total}>
          {total_amount}
        </div>
        <div className={s.status}>
          {status}
        </div>
      </div>
    </>
  );
}

export default CardOrder;
