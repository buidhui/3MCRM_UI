import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import url from "../url";
import axios from "axios";
const color = ["danger", "info", "success", "dark", "warning", "primary"];
export default class Statistics extends Component {
        state = {
            customerList: [],
        };
        componentDidMount() {
            axios({
                method: "get",
                url: `${url}/source/list`
            })
            .then((respone) =>{
                this.setState({
                    customerList: respone.data
                })
            })
            .catch(error => {
                console.log(error);
            });
    }
    calculate = (a,b) =>{
        return (parseInt(a)/parseInt(b))*100 ;
    }
    render() {
        const {customerList} = this.state;
        return (
            <Row>
                {customerList && customerList.map((customer) => {
                    return <Col key={customer.id} lg={3}>
                        <Card bg={color[Math.floor(Math.random()*color.length)]} style={{ width: '100%' }}>
                            <Card.Header>{customer.name}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    Số lượng lead: <strong className="float-right">{customer.total}</strong>
                                </Card.Text>
                                <Card.Text>
                                    Phân trăm chuyển đổi: <strong className="float-right">{this.calculate(customer.convert,customer.total).toFixed(2)}%</strong>
                                </Card.Text>
                                <Card.Text>
                                    Ngày thêm: <strong className="float-right">{customer.date}</strong>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>
        );
      })
      .catch(error => {
        console.log(error);
      });
  }

  calculate = (a, b) => {
    return (parseInt(a) / parseInt(b)) * 100;
  };
  render() {
    const { customerList } = this.state;
    return (
      <Row>
        {customerList &&
          customerList.map(customer => {
            return (
              <Col key={customer.id} lg={3}>
                <Card
                  bg={color[Math.floor(Math.random() * color.length)]}
                  style={{ width: "100%" }}
                >
                  <Card.Header>{customer.name}</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Số lượng lead:{" "}
                      <strong className="float-right">{customer.total}</strong>
                    </Card.Text>
                    <Card.Text>
                      Phân trăm chuyển đổi:{" "}
                      <strong className="float-right">
                        {this.calculate(
                          customer.convert,
                          customer.total
                        ).toFixed(2)}
                        %
                      </strong>
                    </Card.Text>
                    <Card.Text>
                      Ngày thêm:{" "}
                      <strong className="float-right">{customer.date}</strong>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    );
  }
}
