import React from 'react';
import {Modal} from 'react-bootstrap';
import StaffUpdateForm from './StaffUpdateForm';


export default function PopupForm(props) {
    const [show, setShow] = React.useState(false);
    return (
      <>
        <button type="button" className="btn btn-primary float-right" onClick={() => setShow(true) }>
          Sửa thông tin 
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
              <h4>Thay đổi thông tin nhân viên</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-form-body">
            <StaffUpdateForm staff={props.staff} onClick={() => setShow(false)} onUpdateData={props.onUpdateData}/>
          </Modal.Body>
        </Modal>
      </>
    );
  }