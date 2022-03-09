import React from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { getOrderByStatus } from "../../../../redux/actions";

export const OrderFilter = () =>{

    
    const dispatch = useDispatch();

    const handleChange = (e) =>{
        dispatch(getOrderByStatus(e.target.value));
    }

    return(<>
        <select onChange={(e) => handleChange(e)}>
            <option value="approved">Aprobadas</option>
            <option value="process">En proceso</option>
            <option value="rejected">Rechazadas</option>
            <option value="delivered">Despachadas</option>
        </select>
    </>)
    


}