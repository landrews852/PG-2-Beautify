import React from 'react';
import Card from '../cartCard';
import s from './Cart.module.css';
import { useSelector, useDispatch } from 'react-redux';

export default function Cart () {
  // const dispatch = useDispatch();
  const productos = useSelector(state => state.cart);
  console.log(productos);
  return (
    <div className={s.cart}>
      <h2 className={s.title}>Carrito de compras</h2>
      {/* <div className={s.cart}> */}
        <div className={s.cartItems}>
            {
              productos.length?productos.map(p => <Card product_name={p.product_name} id={p.id} cost_by_unit={p.cost_by_unit} image={p.image}/>)
              :<p>No hay productos en el carrito.</p>
            }
        </div>
      {/* </div> */}
    </div>
  )
}