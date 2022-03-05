import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { cleanCart, getOrders } from "../../../redux/actions";
import CardOrder from "../../cards/cardOrder/CardOrder.jsx";

export default function PanelUser() {
  const dispatch = useDispatch();
  const location = useLocation().search;
  let user = useSelector((state) => state.user.id);
  let orders = useSelector((state) => state.orders);
  console.log(location);
  if (location.toString() === "?true") dispatch(cleanCart());

  useEffect(() => {
    dispatch(getOrders(user));
  });
  return (
    <>
      {orders.length ? (
        orders.map((o) => (
          <CardOrder
            order_date={o.order_date}
            key={o.id}
            total_amount={o.total_amount}
            products={o.products}
          />
        ))
      ) : (
        <p>No tienes ordenes.</p>
      )}
    </>
  );
}
