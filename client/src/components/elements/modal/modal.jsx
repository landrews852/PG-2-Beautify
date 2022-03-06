import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';



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
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
              
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
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
        Publicar Review
        </button>

        <CenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </>
    )
}