import React, { useEffect} from 'react';
import Orders from './orders';
import { useDispatch, useSelector } from "react-redux";
import { cleanOrderDetail } from '../../../../redux/actions';


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
          <div>
            {console.log(orderDetail)}
            {orderDetail.products.length ? (
              orderDetail.products.map(p => <>
              <span>{p.product_name}</span>
              <img src={`${p.product_name}`} alt="Imagen del producto" />
              <button onClick={() => postReview(p.id)}>Opina</button>
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