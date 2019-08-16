import React, { Component } from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";
import axios from "axios";
import { Link, Prompt } from "react-router-dom";
import url from "../url";
import Select from "react-select";
const group = [];

class CustomerAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      DOB: "",
      gender: "",
      address: "",
      email: "",
      phone: "",
      description: "",
      staff: "",
      customerType: [],
      groupList: [],
    };
  }
  componentDidMount() {
    axios({
      method: 'get',
      url: `${url}/customer-group/list`
    }).then(respone => {
      this.setState({
        groupList: respone.data,
      })
    }).catch(error => {
      console.log(error)
    });
  }
  pushGroup = (groupList, group) => {
    if (groupList.length !== 0 && group.length === 0) {
      for (var i = 0; i < groupList.length; i++) {
        var value = groupList[i].id;
        var label = groupList[i].name
        group.push({ value: value, id: value, label: label });
      }
    }
  };
  handleChangeGroup = selectedGroup => {
    this.setState({
      customerType: selectedGroup
    },()=>{
      console.log(this.state)
    })
  };
  onUpdateData = data => {
    this.props.onUpdateData(data);
  };
  addCustomer(obj) {
    axios({
      method: "post",
      url: `${url}/customers/add`,
      data: obj,
      headers: {
        "content-type": "application/json"
      }
    })
      .then(() => {
        alert("Thêm mới khách hàng thành công");
        axios({
          method: "get",
          url: `${url}/customers/list`
        })
          .then(respone => {
            this.onUpdateData(respone.data);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        alert("Không thể thêm mới khách hàng");
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
      });
  };
  onSubmit = event => {
    event.preventDefault();

    const data = {
      "name": this.state.name ? this.state.name : null,
      "address": this.state.address ? this.state.address : null,
      "dob": this.state.DOB ? this.state.DOB : null,
      "email": this.state.email ? this.state.email : null,
      "gender": this.state.gender ? this.state.gender : null,
      "phone": this.state.phone ? this.state.phone : null,
      "note": this.state.description ? this.state.description : null,
      "staff": {
        id: this.state.staff ? this.state.staff : null
      },
      "groups": this.state.customerType ? this.state.customerType : null
    };
    if (!data.name || !data.email || !data.phone) {
      alert("Tên khách hàng, email và số điện thoại không được để trống!");
    } else {
      this.addCustomer(data);
      this.props.onClick();
    }
  };
  render() {
    const { groupList } = this.state;
    this.pushGroup(groupList, group);
    const selectedGroup = undefined;
    return (
      <Row>
        <Prompt
          when={!!this.state.name}
          message="Bạn có chắc chắn muốn dừng lại?"
        />
        <Col xs={12}>
          <Form>
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
                        Tên khách hàng <span style={{ color: "red" }}>*</span>
                      </Form.Label>
                      <Form.Control
                        type="name"
                        name="name"
                        value={this.state.name}
                        placeholder="Nhập tên khách hàng"
                        onChange={this.onChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col} lg={4} controlId="formGridDOB">
                      <Form.Label>Ngày sinh</Form.Label>
                      <Form.Control
                        type="date"
                        required="required"
                        name="DOB"
                        value={this.state.DOB}
                        placeholder="Nhập ngày sinh"
                        onChange={this.onChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col} lg={3} controlId="formGridGender">
                      <Form.Label>Giới tính</Form.Label>
                      <Form.Control
                        as="select"
                        name="gender"
                        onChange={this.onChange}
                      >
                        <option value={null}>Giới tính</option>
                        <option value={1}>Nam</option>
                        <option value={0}>Nữ</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>
                  <Form.Row className="add-form-row">
                    <Form.Group as={Col} xs={12} controlId="formGridAddress">
                      <Form.Label>Địa chỉ</Form.Label>
                      <Form.Control
                        type="address"
                        name="address"
                        value={this.state.address}
                        placeholder=""
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
                        placeholder="Nhóm khách hàng"
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
                        name="description"
                        value={this.state.description}
                        placeholder="Nhập mô tả về khách hàng"
                        onChange={this.onChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row className="add-form-row">
                    <Form.Group as={Col} controlId="formGridName">
                      <Form.Label>Nhân viên chăm sóc</Form.Label>
                      <Form.Control
                        name="staff"
                        value={this.state.staff}
                        placeholder=""
                        onChange={this.onChange}
                      />
                    </Form.Group>
                  </Form.Row>
                </Container>
              </Col>
            </Row>
            <hr className="form-line" />
            <Link to="/customers">
              <Button
                variant="primary"
                type="submit"
                className="float-right"
                onClick={this.onSubmit}
              >
                Lưu thông tin
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default CustomerAddForm;
