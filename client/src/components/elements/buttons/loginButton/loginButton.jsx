import React from 'react';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from '../../../features/login/login';


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Login />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }
  
  export default function ButtonLogin() {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <span variant="primary" onClick={() => setModalShow(true)}>
          Login
        </span>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
