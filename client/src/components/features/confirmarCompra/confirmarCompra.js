import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Card from '../../cards/cartCard/cartCard';
import Total from '../../elements/totalCart/totalCart';
import s from './confirmarCompra.module.css'

export default function confirmarCompra(props) {
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Confirma tu compra...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 style={{margin:20}} >Productos:</h4>
          <div className={s.filas}>
          <span className={s.name}>Nombre</span>
          <span className={s.amount}>Cantidad</span>
          <span className={s.total} >Precio</span>
          </div>
        {
        props.productos.map ((p) => (
          <div className={s.filas}>
            <span className={s.name} >{p.product_name} </span>
            <span className={s.amount}>{p.amount}</span>
            <span className={s.total}>{p.total}</span>
            <hr/>          
          </div>

        ))  
        }
      <Total/>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={props.onHide}>Close</button>
        <button onClick={props.onPay}>Pay</button>
      </Modal.Footer>
    </Modal>
  );
}
