import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import PostReview from '../../pages/client/postreview/postreview';
import m from './modal.module.css'
import { useEffect } from 'react';
import { getReviewUser } from '../../../redux/actions';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function ModalComp({id , product, handleBack}) {
const reviews = useSelector(state => state.reviews)
const [modalShow, setModalShow] = useState(false);
const user = JSON.parse(localStorage.getItem('user'))
const dispatch = useDispatch()

const pruebaid = "109233972128167815856"

useEffect(() => {
  dispatch(getReviewUser(id,user[0].id));
}, [dispatch]);


  
const handlePublished = () => {
  console.log("review publicada");
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
        {reviews.length?<button className={m.buttonrp} onClick={() => handlePublished()}>Review Publicada</button>
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