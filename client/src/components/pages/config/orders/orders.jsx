import React, { useEffect} from 'react';
import CardOrder from '../../../cards/cardOrder/CardOrder';
import { getOrderDetail, getOrders } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import OrderDetail from './orderDetail'
import s from './orders.module.css'
import { OrderFilter } from './orderFilter';


export default function Orders({setOps}) {
    const dispatch = useDispatch();

    const userlocal = JSON.parse(localStorage.getItem("user"));
    let { id } = userlocal[0];
    let orders = useSelector((state) => state.orders);
  
    useEffect(() => {
      dispatch(getOrders(id));
    }, []);

    const handleClick = (id) => {
      dispatch(getOrderDetail(id))
      setOps(<OrderDetail setOps={setOps}/>)
    }

    return (
        <>
        
        <h3 className={s.h3}>Listado de ordenes</h3>
        {orders.length ? (
        orders.map((o) => (
        <div key={o.id}>
          <CardOrder
            order_date={o.order_date}
            id={o.id}
            total_amount={o.total_amount}
            status = {o.status}
            address={o.address}
            getDetail = {handleClick}
          />
        </div>
        ))
      ) : (
        <p>No tienes ordenes.</p>
      )}
      
      </>
    )

}