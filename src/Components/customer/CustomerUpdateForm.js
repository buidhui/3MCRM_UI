import React, { Component } from "react";
import { Form, Col, Button, Row, Container } from "react-bootstrap";
import axios from "axios";
import { Prompt } from "react-router-dom";
import url from "../url";
import Select from "react-select";
const staff = [];
const group = [];
const groupStr = [];
class CustomerAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      dob: "",
      gender: "2",
      address: "",
      email: "",
      phone: "",
      note: "",
      staff: "",
      customerType: [],
      staffList: [],
      groupList: []
    };
  }
  addCustomer(obj) {
    axios({
      method: "put",
      url: `${url}/customers/${this.state.id}`,
      data: obj,
      headers: {
        "content-type": "application/json"
      }
    })
      .then(() => {
        alert("Cập nhật thông tin khách hàng thành công");
        axios({
          method: "get",
          url: `${url}/customers/${this.state.id}`,
          data: obj,
          headers: {
            "content-type": "application/json"
          }
        })
          .then(respone => {
            this.onUpdateData(respone.data);
          })
          .catch(error => {
            console.log(error);
          });
        // console.log("response đâyyy");
        // console.log(respone);
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
      address: this.state.address,
      dob: this.state.dob,
      email: this.state.email,
      gender: this.state.gender,
      phone: this.state.phone,
      note: this.state.note,
      staff: {
        id: this.state.staff.id ? this.state.staff.id : null
      },
      groups: this.state.customerType ? this.state.customerType : null
    };
    if (!data.name || !data.email || !data.phone) {
      alert("Tên khách hàng, email và số điện thoại không được để trống!");
      console.log(data);
    } else {
      this.addCustomer(data);
      this.props.onClick();
    }
  };
  componentDidMount() {
    axios({
      method: "get",
      url: `${url}/staffs/list`
    })
      .then(respone => {
        this.setState({
          staffList: respone.data
        });
      })
      .catch(error => {
        console.log(error);
      });
    axios({
      method: "get",
      url: `${url}/vinh`
    })
      .then(respone => {
        this.setState({
          groupList: respone.data
        });
      })
      .catch(error => {
        console.log(error);
      });

    const customer = this.props.customer;
    this.setState({
      id: customer.id,
      name: customer.name,
      dob: customer.dob ? customer.dob : "",
      gender: customer.gender ? customer.gender : "",
      address: customer.address ? customer.address : "",
      email: customer.email ? customer.email : "",
      phone: customer.phone ? customer.phone : "",
      note: customer.note ? customer.note : " ",
      staff: customer.staff ? customer.staff : "",
      customerType: customer.groups
    });
  }
  pushCustomer = (staffList, staff) => {
    if (staffList.length !== 0 && staff.length === 0) {
      for (var i = 0; i < staffList.length; i++) {
        var value = staffList[i];
        var label = staffList[i].name + " - " + staffList[i].id;
        staff.push({ value: value, label: label });
      }
    }
  };
  pushGroup = (groupList, group) => {
    if (groupList.length !== 0 && group.length === 0) {
      for (var i = 0; i < groupList.length; i++) {
        var value = groupList[i].id;
        var label = groupList[i].name;
        group.push({ value: value, id: value, label: label });
      }
    }
  };
  pushGroupStr = (customerType, groupStr) => {
    if (customerType.length !== 0 && groupStr.length === 0) {
      for (var i = 0; i < customerType.length; i++) {
        var value = customerType[i].name;
        groupStr.push(value);
      }
    }
  };
  handleChangeCus = selectedStaff => {
    this.setState(
      {
        staff: selectedStaff.value
      },
      () => {
        console.log(this.state);
      }
    );
  };
  handleChangeGroup = selectedGroup => {
    this.setState(
      {
        customerType: selectedGroup
      },
      () => {
        console.log(this.state);
      }
    );
  };
  onUpdateData = data => {
    this.props.onUpdateData(data);
  };
  render() {
    const { staffList, groupList, customerType } = this.state;
    this.pushCustomer(staffList, staff);
    this.pushGroup(groupList, group);
    this.pushGroupStr(customerType, groupStr);
    var staffStr = this.state.staff.name;
    const selectedGroup = undefined;
    const selectedStaff = undefined;
    return (
      <Row>
        <Prompt
          when={!!this.state.name}
          message="Bạn có chắc chắn muốn dừng lại?"
        />
        <Col lg={12}>
          <Form >
            <Form.Label>
              <h4>Thông tin cơ bản </h4>
            </Form.Label>
            <Row>
              <Col lg={8} className="add-col">
                <Container className="add-form">
                  <Form.Row className="add-form-row">
                    <Form.Group as={Col} controlId="formGridName">
                      <Form.Label>
                        Tên khách hàng <span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridDOB">
                      <Form.Label>Ngày sinh</Form.Label>
                      <Form.Control
                        type="date"
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
                    <Form.Group as={Col} lg={12} controlId="formGridAddress">
                      <Form.Label>Địa chỉ</Form.Label>
                      <Form.Control
                        type="address"
                        name="address"
                        value={this.state.address}
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
                        placeholder="Nhập email khách hàng"
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
                  <Form.Row className="add-form-row">
                    <Form.Group as={Col} controlId="formGridCusType">
                      <Form.Label>Nhóm khách hàng</Form.Label>
                      <Select
                        isMulti
                        value={selectedGroup}
                        onChange={this.handleChangeGroup}
                        options={group}
                        placeholder={groupStr.toString()}
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
                        onChange={this.onChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row className="add-form-row">
                    <Form.Group as={Col} controlId="formGridName">
                      <Form.Label>Nhân viên chăm sóc</Form.Label>
                      <Select
                        value={selectedStaff}
                        onChange={this.handleChangeCus}
                        options={staff}
                        placeholder={staffStr}
                      />
                    </Form.Group>
                  </Form.Row>
                </Container>
              </Col>
            </Row>
            <hr className="form-line" />
            <Button
              variant="primary"
              // type="submit"
              className="btn_save float-right"
              onClick={this.onSubmit}
            >
              Lưu thông tin
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default CustomerAddForm;
