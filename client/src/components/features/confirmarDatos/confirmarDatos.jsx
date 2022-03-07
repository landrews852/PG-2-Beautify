import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'
import s from './confirmarDatos.module.css'
export default function confirmarDatos(props) {



  return (
    <div>
      <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className={s.header}>
          Datos de envio
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div >
            <div className={s.filase} >
            <h5 className={s.name}>Nombre:</h5>
            <span>{props.user.name_client + ' ' + props.user.lastname_client}</span>
            </div>
            <div className={s.filase} >
            <h5 className={s.amount}>Email: </h5>
            <span>{props.user.email}</span>
            </div>
            <div className={s.filase} >
            <h5 className={s.total} >Dirección:</h5> 
            <span>{props.user.address}</span> 
            </div>
            <div className={s.filase}>
            <h5>Telefono:</h5>
            <span>{props.user.phone}</span> 
            </div>
          </div>  

      </Modal.Body>
      <Modal.Footer>
        <div className={s.contbtn} >
        <button className={s.close} onClick={props.onHide} >Volver</button>
        <Link to={'/client/edit'}>
        <button  className={s.edit} >Editar</button>  
        </Link>     
        <button className={s.pay} onClick={props.onPay}>Pagar</button>       
        </div>
      </Modal.Footer>
    </Modal>
    </div>
  )
}
