import React from 'react';
import {Modal} from 'react-bootstrap';
import ProductUpdateForm from './ProductUpdateForm';


export default function PopupForm(props) {
    const [show, setShow] = React.useState(false);
    const style = {left: '135px'} 
    return (
      <>
        <button type="button" style={{padding: "3px 5px"}} className=" btn btn-outline-info waves-effect"  onClick={() => setShow(true) }>
          Sửa 
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
              <h4>Thay đổi thông tin khách hàng</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-form-body">
            <ProductUpdateForm product={props.product} onClick={() => setShow(false)} onUpdateData={props.onUpdateData}/>
          </Modal.Body>
        </Modal>
      </>
    );
  }