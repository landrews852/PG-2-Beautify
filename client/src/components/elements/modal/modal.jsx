import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PostReview from '../../pages/client/postreview/postreview';
import m from './modal.module.css'
import { useEffect } from 'react';
import Swal from 'sweetalert2';



export default function ModalComp({id , product, user, revuser, handleBack}) {
const reviews = useSelector(state => state.reviewsuser)
const [modalShow, setModalShow] = useState(false);
const dispatch = useDispatch();

const revcheck = revuser&&revuser.filter(r => r.productId == id)

const handlePublished = () => {
  
  Swal.fire({
    icon: 'warning',
    text: 'Ya has publicado una review en este producto',
    timer: '3000'
  })
}

function close (v) {
   setModalShow(v);
   handleBack();   
}

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
         < PostReview id={id} user={user} close={close}/>
        </Modal.Body>
      </Modal>
    );
  }
    return (
        <>
        {revcheck.length?<button className={m.buttonrp} onClick={() => handlePublished()}>Review Publicada</button>
        :<button className={m.button} variant="primary" onClick={() => setModalShow(true)}>
        Crear Review
        </button>
        }
        <CenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </>
    )
}