import React from 'react';
import {Modal} from 'react-bootstrap';
import CustomerAddForm from './LeadAddForm';


export default function PopupForm(props) {
    const [show, setShow] = React.useState(false);
    const style = {left: '135px'} 
    return (
      <>
        <button type="button" className=" btn btn-outline-primary" onClick={() => setShow(true) }>
        <i className="fas fa-magic mr-1"></i>
        </button>
  
        <Modal
          className="modal-form"  
          size="xl"
          style={style}
          show={show}
          onHide={() => setShow(false)}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="popup-form">
              <h4>Chuyển đổi thành khách hàng</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-form-body">
            <CustomerAddForm onClick={() => setShow(false)} onUpdateData={props.onUpdateData} customer={props.customer}/>
          </Modal.Body>
        </Modal>
      </>
    );
  }