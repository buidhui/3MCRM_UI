import React from 'react';
import {Modal} from 'react-bootstrap';
import CustomerGroupUpdateForm from './CustomerGroupAddForm';


export default function PopupForm(props) {
    const [show, setShow] = React.useState(false);
    
    return (
      <>
        <button type="button" className="btn btn-primary float-right" onClick={() => setShow(true) }>
          Thêm mới 
        </button>
  
        <Modal
          className="modal-form"  
          size="lg"
          show={show}
          onHide={() => setShow(false)}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="popup-form">
              <h4>Thêm mới nhóm khách hàng</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-form-body">
            <CustomerGroupUpdateForm  onClick={() => setShow(false)} onUpdateData={props.onUpdateData}/>
          </Modal.Body>
        </Modal>
      </>
    );
  }