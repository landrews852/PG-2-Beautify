import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCirclePause, faCircleMinus, faBox } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import s from "./cardOrder.module.css";
import {putOrder} from "../../../redux/actions/index";
import {useDispatch} from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";


function CardOrder({ total_amount, address, order_date, id, status, getDetail, name_client, lastname_client }) {

const iconstatus = status=="approved"?<FontAwesomeIcon className={s.checked} icon={faCircleCheck}/>:
status=="process"?<FontAwesomeIcon className={s.pause} icon={faCirclePause}/>:
status=="rejected"?<FontAwesomeIcon className={s.rejected} icon={faCircleMinus}/>:<FontAwesomeIcon className={s.delivered} icon={faBox}/>  

const dispatch = useDispatch();
const { getAccessTokenSilently } = useAuth0();

const handleChange = async(e) => {
  const token = await getAccessTokenSilently();
dispatch(putOrder(e.target.value, id, token))
}


  return (
    <>
      <div className={s.container}>
          <div className={s.containerorder}>
          <div className={s.containerdata}>
            {iconstatus}
          </div>
          <div className={s.containerdata} onClick={() => getDetail(id)}>
            <label>id de la orden</label>
            <div className={s.orderId}>
              {id}
            </div>
          </div>
          <div className={s.containerdata}>
            <label>Usuario</label>
            <div className={s.name_client}>
              {`${name_client} ${lastname_client}`}
            </div>
          </div>
          <div className={s.containerdata}>
              <label>Fecha</label>
              <div className={s.date}>
                {order_date.slice(0,10)}
              </div>
            </div> 
            <div className={s.containerdata}>
                <label>Hora</label>
                <div className={s.time}>
                  {order_date.slice(11,19)}  
                </div>
            </div>
            <div className={s.containerdata}>
              <label>Total</label>
              <div className={s.total}>
                {total_amount}
              </div>
            </div>
            <div className={s.containerdata}>  
              <label>Estado</label>
              <div className={s.status}>
                <select onChange={handleChange}>
                <option value="approved">approved</option>
                  <option value="process">in process</option>
                  <option value="delivered">delivered</option>
                  <option value="rejected">rejected</option>
                </select>
              </div>
            </div>  
          </div> 
        </div>     
    </>
  );
}

export default CardOrder;
