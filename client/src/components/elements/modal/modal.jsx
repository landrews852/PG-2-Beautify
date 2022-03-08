import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import PostReview from '../../pages/client/postreview/postreview';
import m from './modal.module.css'


export default function ModalComp({id , product}) {

const [modalShow, setModalShow] = useState(false);
const user = JSON.parse(localStorage.getItem('user'))
function CenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Publicar review de producto {product}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
         < PostReview id={id} user={user} />
        </Modal.Body>
      </Modal>
    );
  }
    return (
        <>
        <button className={m.button} variant="primary" onClick={() => setModalShow(true)}>
        Crear Review
        </button>

        <CenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </>
    )
}