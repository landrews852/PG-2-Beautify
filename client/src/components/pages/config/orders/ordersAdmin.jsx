import React, { useEffect, useState} from 'react';
import CardOrder from '../../../cards/cardOrder/CardOrder';
import { getAllOrders, getOrderDetail, getOrders } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import OrderDetail from './orderDetail'
import s from './ordersAdmin.module.css'
import { useAuth0 } from "@auth0/auth0-react";
import { searchId } from "../../../../redux/actions";


export default function Orders({setOps}) {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);
    const { getAccessTokenSilently } = useAuth0();
  
    const handleSubmit = async (e) => {

      e.preventDefault();
      const token = await getAccessTokenSilently();
      dispatch(searchId(input, token)).then((res) => {
        console.log(res.data);
        const arr = []
        arr.push(res.data)
        setData(arr);
      });
    };

    const handleChange = (e) => {
      const { value } = e.target;
      setInput(value);
    };

    const userlocal = JSON.parse(localStorage.getItem("user"));
    let { id } = userlocal[0];
    let orders = useSelector((state) => state.orders);
  
    // useEffect(() => {
    //   dispatch(getOrders(id));
    // }, []);

    useEffect(async ()=>{
      const token = await getAccessTokenSilently();
      dispatch(getAllOrders(token))
      .then(res => {
        console.log(res.data)
        setData(res.data)
      })
    }, [])

    const handleClick = (id) => {
      dispatch(getOrderDetail(id))
      setOps(<OrderDetail setOps={setOps}/>)
    }

    return (
        <>
        <h3>Listado de ordenes</h3>
        <form onSubmit={handleSubmit}>
        <div className={s.form}>
          <input
            type="text"
            name="search_name"
            value={input}
            onChange={handleChange}
          />
          <button className="submit" type="submit">
            Buscar
          </button>
        </div>
      </form>
        {data.length ? (
        data.map((o) => (
        <div key={o.id}>
          <CardOrder
            order_date={o.order_date}
            id={o.id}
            total_amount={o.total_amount}
            name_client= {o.client.name_client}
            lastname_client= {o.client.lastname_client}
            status = {o.status}
            address={o.address}
            getDetail = {handleClick}
          />
          {console.log(o.client.name_client)}
        </div>
        ))
      ) : (
        <p>No tienes ordenes.</p>
      )}
      
      </>
    )

}