import React, { Component } from "react";
import { Form, Col, Button, Container } from "react-bootstrap";
import axios from "axios";
import url from "../url";
class ChangePwForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ""
    };
  }
  //   axios({
  //     method: "get",
  //     url: `${url}/staffs/list`
  //   })
  //     .then(respone => {
  //       this.props.onUpdateData(respone.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // })
  // .catch(error => {
  //   console.log(error);
  // });
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
      password: this.state.password
    };
    if (!data.password) {
      alert("Mật khẩu không được để trống!");
    } else {
      this.props.onClick();
      // this.addStaff(data);
    }
  };
  render() {
    return (
      <Form>
        <Col className="add-col">
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
