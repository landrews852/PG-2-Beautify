import React from "react";
import { Link } from "react-router-dom";
import carrito from '../../images/carrito2.png';


export default function Cart_logo() {
  return (
    <div className='cart'>
      <Link to="/cart"><div className='divCarrito'><img src={carrito} alt="carrito" className='navCarrito' /></div></Link>
      <p></p>
    </div>
  );
}