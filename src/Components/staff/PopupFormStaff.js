import React from 'react';
import {Modal} from 'react-bootstrap';
import StaffAddForm from './StaffAddForm';


export default function PopupForm(props) {
    const [show, setShow] = React.useState(false);
   
    return (
      <>
        <button type="button" className=" btn btn-add-cus btn-primary float-right" onClick={() => setShow(true) }>
          Thêm nhân viên
        </button>
  
        <Modal
          className="modal-form"  
          size="xl"

          show={show}
          onHide={() => setShow(false)}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="popup-form">
              <h4>Thêm mới nhân viên</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-form-body">
            <StaffAddForm onClick={() => setShow(false)} onUpdateData={props.onUpdateData}/>
          </Modal.Body>
        </Modal>
      </>
    );
  }