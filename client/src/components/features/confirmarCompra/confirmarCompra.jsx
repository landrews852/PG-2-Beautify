import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom';
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
        <Modal.Title /* id="contained-modal-title-vcenter"*/ className={s.header}>
          Confirma tu compra 
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className={s.productos}>Productos:</h4>
          <div className={s.filase}>
          <span className={s.name}>Nombre:</span>
          <span className={s.amount}>Cantidad:</span>
          <span className={s.total} >Precio:</span>
          </div>
        {
        props.productos.map ((p) => (
          <div className={s.filas}>
            <span className={s.name} >{p.product_name} </span>
            <span className={s.amountf}>{p.amount}</span>
            <span className={s.total}>{p.total}</span>
            <hr/>          
          </div>

        ))  
        }
      <Total/>
      </Modal.Body>
      <Modal.Footer>
        <div className={s.contbtn} >
        <button className={s.close} onClick={props.onHide}>Volver</button>      
        <button className={s.pay} onClick={props.onData}>Confirma datos</button>     
        </div>
      </Modal.Footer>
    </Modal>
  );
}
