import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import m from './modal.module.css'


export default function ModalComp({id , product}) {

const [modalShow, setModalShow] = useState(false);

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
          <div className={m.container}>
          <div className={m.rankproduct}>
              <p>Puntaje del producto</p>
             <select>
                <option disabled selected>Seleccionar puntaje</option>
                 <option value="1">1</option>
                 <option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
             </select>    
          </div>
            <textarea>
            </textarea>
          <button>Publicar review</button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    );
  }
    return (
        <>
        <button variant="primary" onClick={() => setModalShow(true)}>
        Crear Review
        </button>

        <CenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </>
    )
}