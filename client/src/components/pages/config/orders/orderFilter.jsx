import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { getAllOrders, getOrderByStatus, getOrders } from "../../../../redux/actions";

export const OrderFilter = () =>{

    
    const dispatch = useDispatch();
    const userlocal = JSON.parse(localStorage.getItem("user"));
    let { id } = userlocal[0];

    const handleChange = (e) =>{
        if(e.target.value === "todas") return dispatch(getOrders(id));
        return dispatch(getOrderByStatus(e.target.value));
    }

    return(<>
        <select onChange={(e) => handleChange(e)}>
            <option value="todas">Todas</option>
            <option value="approved">Aprobadas</option>
            <option value="process">En proceso</option>
            <option value="rejected">Rechazadas</option>
            <option value="delivered">Despachadas</option>
        </select>
    </>)
    


}