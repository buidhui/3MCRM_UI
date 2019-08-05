import React from 'react';
import {Modal} from 'react-bootstrap';
import CustomerGroupUpdateForm from './CustomerGroupUpdateForm';


export default function PopupForm(props) {
    const [show, setShow] = React.useState(false);
    const style = {left: '135px'} 
    return (
      <>
        <button type="button" className="btn btn-primary float-right" onClick={() => setShow(true) }>
          Sửa thông tin 
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
              <h4>Thay đổi thông tin nhóm khách hàng</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-form-body">
            <CustomerGroupUpdateForm group={props.group} onClick={() => setShow(false)}/>
          </Modal.Body>
        </Modal>
      </>
    );
  }