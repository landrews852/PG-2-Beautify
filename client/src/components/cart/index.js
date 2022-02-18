import React from 'react';
import productos from '../../datamock/Products.json'
import Card from '../cartCard';
import s from './Cart.module.css';


export default function Cart () {
  return (
    <div>
      <h2 className={s.title}>Carrito de compras</h2>
      {/* <div className={s.cart}> */}
        <div className={s.cartItems}>
            {
              productos&&productos.map(p => <Card product_name={p.product_name} />)
            }
        </div>
      {/* </div> */}
    </div>
  )
}