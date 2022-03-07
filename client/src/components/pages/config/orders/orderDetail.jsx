import React, { useEffect} from 'react';
import Orders from './orders';
import { useDispatch, useSelector } from "react-redux";
import { cleanOrderDetail } from '../../../../redux/actions';
import ModalComp from '../../../elements/modal/modal';
import s from './orderDetail.module.css'

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
          <button onClick={handleBack}>Atras</button>
          <div className={s.container}>
            {console.log(orderDetail)}
            {orderDetail.products.length ? (
              orderDetail.products.map(p => <>
              <div>
              <span>{p.product_name}</span>
              <img src={`${p.product_name}`} alt="Imagen del producto" />
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