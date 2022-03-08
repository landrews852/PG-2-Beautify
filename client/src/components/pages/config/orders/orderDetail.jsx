import React, { useEffect} from 'react';
import Orders from './orders';
import { useDispatch, useSelector } from "react-redux";
import { cleanOrderDetail } from '../../../../redux/actions';
import ModalComp from '../../../elements/modal/modal';
import s from './orderDetail.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function OrderDetail({setOps}) {
  const dispatch = useDispatch();
  let orderDetail = useSelector(state => state.orderDetail)

  useEffect(()=>{
    return dispatch(cleanOrderDetail()); 
  },[])

  const handleBack = () => {
    dispatch(cleanOrderDetail())
    setOps(<Orders setOps={setOps}/>)
  }

  const postReview = (id) => {
    console.log('Producto ',id)
  }

    return (
        <>
        
        {orderDetail.id ? (<>
          <button className={s.button} onClick={handleBack}><FontAwesomeIcon icon={faArrowLeft} /> Atras</button>
          <div className={s.container}>
            {console.log("detalle de orden",orderDetail)}
            {orderDetail.products.length ? (
              orderDetail.products.map(p => <>
              
              <div className={s.ordercontainer}>
              <Link to={`/market/${p.id}`}>               
              <img src={`${p.image[0]}`} alt="Imagen del producto" />
              <span>{p.product_name}</span>
              </Link> 
              < ModalComp key={p.id} product={p.product_name} id={p.id}/>
              </div>
              
              </>
              )
            ) : null}
          </div>
        </>
        ) : (
          <>
          Espere un momento
          </>
        )}
        
      </>
    )

}