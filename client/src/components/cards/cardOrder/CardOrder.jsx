import React from "react";

function CardOrder({
  products,
  total_amount,
  // direction,
  order_date,
}) {
  return (
    <div>
      <div>
        <h1>{order_date}</h1>
        {products.map((p) => (
          <img src={p.image} />
        ))}
        <h3>producto</h3>
        {products.map((p) => (
          <span>{p.product_name}</span>
        ))}
        <h3>Cantidad</h3>
        {products.map((p) => (
          <span>{p.product_name.order_product.quantity}</span>
        ))}
        <h3>Price</h3>
        {products.map((p) => (
          <span>{p.product_name.order_product.price}</span>
        ))}
        <span>Total: {total_amount}</span>
        {/* <span>{direction}</span> */}
      </div>
    </div>
  );
}

export default CardOrder;
