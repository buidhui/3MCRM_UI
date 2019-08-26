import React from "react";
import { Modal } from "react-bootstrap";
import ChangePwForm from "./ChangePwForm";

export default function ChangePassword(props) {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <button
        style={{marginRight: "5px"}}
        type="button"
        className=" btn btn-add-cus btn-primary float-right"
        onClick={() => setShow(true)}
      >
        <i className="fas fa-exchange-alt" />
      </button>

      <Modal
        className="modal-form"
        size="sm"
        show={show}
        onHide={() => setShow(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="popup-form">
            <h4>Đổi mật khẩu</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-form-body">
          <ChangePwForm
            onClick={() => setShow(false)}
            onUpdateData={props.onUpdateData}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
