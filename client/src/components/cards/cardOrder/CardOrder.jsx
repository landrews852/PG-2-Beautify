import React from "react";
import ModalComp from "../../elements/modal/modal";
import s from "./cardOrder.module.css";

function CardOrder({ products, total_amount, address, order_date }) {
  return (
    <div>
      <div>
        <h1>{order_date.slice(0, 10)}</h1>
        {products?products.map((p) => (
          <>
            <img src={p.image[0]} style={{ width: 100 + "px" }} />
            <span></span>
            <span className={s.product_name}>{p.product_name}</span>
            <h3>Cantidad</h3>
            <span>{p.order_product.quantity}</span>
            <h3>Price</h3>
            <span>{p.order_product.price}</span>
            < ModalComp key={p.id} id={p.id} product={p.product_name} />
          </>
        )):<p>Sin productos</p>}
        <span>total de la compra: {total_amount}</span>
        <span>Dirección</span>
        <span>{address}</span>
        
      </div>
    </div>
  );
}

export default CardOrder;
