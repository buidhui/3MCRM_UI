import React from 'react';
import {Modal} from 'react-bootstrap';
import CustomerAddForm from './CustomerAddForm';


export default function PopupForm(props) {
    const [show, setShow] = React.useState(false);
    return (
      <>
        <button type="button" className=" btn btn-add-cus btn-primary float-right" onClick={() => setShow(true) }>
          Thêm khách hàng 
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
              <h4>Thêm mới khách hàng</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-form-body">
            <CustomerAddForm onClick={() => setShow(false)} onUpdateData={props.onUpdateData}/>
          </Modal.Body>
        </Modal>
      </>
    );
  }