import React, { Component } from "react";
import { Form, Col, Button, Container } from "react-bootstrap";
import axios from "axios";
import url from "../url";
class ChangePwForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      dob: "",
      gender: "",
      role: "",
      email: "",
      phone: "",
      note: ""
    };
  }
  addStaff(obj) {
    axios({
      method: "post",
      url: `${url}/staffs/add`,
      data: obj,
      headers: {
        "content-type": "application/json"
      }
    })
      .then(() => {
        alert("Thêm nhân viên thành công");
        axios({
          method: "get",
          url: `${url}/staffs/list`
        })
          .then(respone => {
            this.props.onUpdateData(respone.data);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  }
  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === "gender") {
      value = target.value === "1" ? 1 : 0;
    }
    this.setState(
      {
        [name]: value
      },
      () => {
        console.log(this.state);
      }
    );
  };
  onSubmit = event => {
    event.preventDefault();

    const data = {
      id: this.state.id,
      name: this.state.name,
      jobTitle: this.state.role,
      dob: this.state.dob,
      email: this.state.email,
      gender: this.state.gender,
      phone: this.state.phone,
      note: this.state.note
    };
    if (!data.name || !data.email || !data.phone) {
      alert("Tên nhân viên, email, số điện thoại không được để trống!");
    } else {
      this.props.onClick();
      this.addStaff(data);
    }
  };
  render() {
    return (
      <Form>
        <Col xs={6} md={4} className="add-col">
          <Container className="add-form">
            <Form.Row className="add-form-row">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>
                  Mật khẩu mới <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  name="name"
                  value={this.state.name}
                  placeholder="Mật khẩu mới"
                  onChange={this.onChange}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row className="add-form-row">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  Nhập lại mật khẩu <span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  name="email"
                  value={this.state.email}
                  placeholder="Nhập lại mật khẩu"
                  onChange={this.onChange}
                />
              </Form.Group>
            </Form.Row>
          </Container>
        </Col>

        {/* <hr className="form-line" /> */}
        <Button
          variant="primary"
          // type="submit"
          className="btn_save float-right"
          onClick={this.onSubmit}
        >
          Lưu
        </Button>
      </Form>
    );
  }
}

export default ChangePwForm;
