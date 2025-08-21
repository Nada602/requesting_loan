import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function BopUp({text,show,close}) {
  

  return (
    <>
      

      <Modal
        show={show}
        onHide={close}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body className="text-danger fs-4 fw-bolder text-center">
          {text}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={close}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BopUp;
