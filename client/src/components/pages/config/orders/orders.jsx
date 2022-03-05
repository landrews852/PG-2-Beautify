import React, { useEffect} from 'react';
import CardOrder from '../../../cards/cardOrder/CardOrder';
import { cleanCart, getOrders } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";


export default function Orders() {
    const dispatch = useDispatch();
    const location = useLocation().search;
    const userlocal = JSON.parse(localStorage.getItem("user"));
    let { id } = userlocal[0];
    let orders = useSelector((state) => state.orders);
    console.log(orders);
    if (location.toString() === "?true") dispatch(cleanCart());
  
    useEffect(() => {
      dispatch(getOrders(id));
    }, []);

    return (
        <>
        {orders.length ? (
        orders.map((o) => (
          <CardOrder
            order_date={o.order_date}
            key={o.id}
            total_amount={o.total_amount}
            products={o.products}
            address={o.address}
          />
        ))
      ) : (
        <p>No tienes ordenes.</p>
      )}
      </>
    )

}