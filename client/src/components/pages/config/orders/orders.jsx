import React, { useEffect} from 'react';
import CardOrder from '../../../cards/cardOrder/CardOrder';
import { getOrders } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";


export default function Orders() {
    const dispatch = useDispatch();

    const userlocal = JSON.parse(localStorage.getItem("user"));
    let { id } = userlocal[0];
    let orders = useSelector((state) => state.orders);
    console.log("Orden",orders);
  
    useEffect(() => {
      dispatch(getOrders(id));
    }, []);

    return (
        <>
        {orders.length ? (
        orders.map((o) => (
        <div key={o.id}>
          <CardOrder
            order_date={o.order_date}
            id={o.id}
            total_amount={o.total_amount}
            status = {o.status}
            address={o.address}
          />
        </div>
        ))
      ) : (
        <p>No tienes ordenes.</p>
      )}
      </>
    )

}