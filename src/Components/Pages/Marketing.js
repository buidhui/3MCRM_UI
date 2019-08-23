import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import url from "../url";
import axios from "axios";
const color = ["danger", "info", "success", "dark", "warning", "primary"];

class Marketing extends Component {
  state = {
    marketing: []
  };
  componentDidMount() {
    axios({
      method: "get",
      url: `${url}/marketing`
    })
      .then(respone => {
        this.setState(
          {
            marketing: respone.data
          },
          () => {
            // console.log(this.state);
          }
        );
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const { marketing } = this.state;

    return (
      <React.Fragment>
        <section className="section">
          <h1 className="section-header">
            <div>Marketing</div>
          </h1>
          <br />
        </section>
        <Row>
          {marketing &&
            marketing.map(marketing => {
              return (
                <Col key={marketing.id} lg={6}>
                  <Card
                    bg={color[Math.floor(Math.random() * color.length)]}
                    style={{ width: "100%" }}
                  >
                    <Card.Header>{marketing.name}</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        Thời Gian:{" "}
                        <strong className="float-right">
                          Từ {marketing.startDate} đến {marketing.finishDate}
                        </strong>
                      </Card.Text>
                      <Card.Text>
                        Đối Tượng:{" "}
                        <strong className="float-right">
                          {marketing.groupMarketing &&
                            marketing.groupMarketing
                              .map(group => " " + group.name)
                              .toString()}
                        </strong>
                      </Card.Text>
                      <Card.Text>
                        Trạng Thái:{" "}
                        <strong className="float-right">
                          {marketing.state}
                        </strong>
                      </Card.Text>
                      <Card.Text>
                        Kết Quả:{" "}
                        <strong className="float-right">
                          {" "}
                          {marketing.result}
                        </strong>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </React.Fragment>
    );
  }
}

export default Marketing;
