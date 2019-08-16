import React, { Component } from "react";
import { Form, Col, Button, Row, Container } from "react-bootstrap";
import axios from "axios";
import url from "../url";
//const url= 'http://192.168.10.22:8080/staffs/add'
class StaffAddFrom extends Component {
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
      <Row>
        <Col xs={12}>
          <Form onSubmit={this.onSubmit}>
            <Form.Label>
              <h4>
                Thông tin cơ bản 
              </h4>
            </Form.Label>
            <Row>
              <Col lg={8} className="add-col">
                <Container className="add-form">
                  <Form.Row className="add-form-row">
                    <Form.Group as={Col} lg={5} controlId="formGridName">
                      <Form.Label>
                        Tên nhân viên <span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={this.state.name}
                        placeholder="Nhập tên nhân viên"
                        onChange={this.onChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col} lg={5} controlId="formGridDOB">
                      <Form.Label>Ngày sinh</Form.Label>
                      <Form.Control
                        type="date"
                        required="required"
                        name="dob"
                        value={this.state.dob}
                        onChange={this.onChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col} lg={3} controlId="formGridGender">
                      <Form.Label>Giới tính</Form.Label>
                      <Form.Control
                        as="select"
                        name="gender"
                        value={this.state.gender}
                        onChange={this.onChange}
                      >
                        <option>Giới tính</option>
                        <option value={1}>Nam</option>
                        <option value={0}>Nữ</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row className="add-form-row">
                    <Form.Group as={Col} xs={12} controlId="formGridAddress">
                      <Form.Label>Chức vụ</Form.Label>
                      <Form.Control
                        type="text"
                        name="role"
                        value={this.state.role}
                        placeholder="Saler"
                        onChange={this.onChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row className="add-form-row">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>
                        Email <span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={this.state.email}
                        placeholder="Nhập email nhân viên"
                        onChange={this.onChange}
                      />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPhone">
                      <Form.Label>
                        Số điện thoại <span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        name="phone"
                        value={this.state.phone}
                        placeholder="Nhập số điện thoại"
                        onChange={this.onChange}
                      />
                    </Form.Group>
                  </Form.Row>
                </Container>
              </Col>
              <Col lg={4}>
                <Container className="add-form">
                  <Form.Row className="add-form-row">
                    <Form.Group as={Col} controlId="formGridName">
                      <Form.Label>Mô tả</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows="5"
                        name="note"
                        value={this.state.note}
                        placeholder="Nhập mô tả về nhân viên"
                        onChange={this.onChange}
                      />
                    </Form.Group>
                  </Form.Row>
                </Container>
              </Col>
            </Row>
            <hr className="form-line" />
            <Button variant="primary" type="submit" className="float-right">
              Lưu thông tin
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default StaffAddFrom;
