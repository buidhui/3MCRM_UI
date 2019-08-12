import React, { Component } from "react";
import {
  Form,
  Col,
  Row,
  Container,
  Button,
  Table,
  Card
} from "react-bootstrap";
import axios from "axios";
import { Link, Prompt } from "react-router-dom";
import Select from "react-select";
import BuyItem from "./BytItem";
import url from "../../url";
const optionCus = [];
const optionProduct = [];

//const url = 'http://192.168.43.95:8080/orders/add'
class CustomerAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      customerDetail: [],
      customerList: [],
      id_cus: "",
      products: [],
      phuongthuc_giaohang: "",
      phuongthuc_thanhtoan: "",
      ngay_giaoHang: "",
      ghi_chu: "",
      chietkhau: 0,
      phi_ship: 0
    };
  }
  componentDidMount() {
    axios({
      method: "get",
      url: `${url}/customers/list`
    })
      .then(respone => {
        this.setState({
          customerList: respone.data
        });
      })
      .catch(error => {
        console.log(error);
      });
    axios({
      method: "get",
      url: `${url}/products/list`
    })
      .then(respone => {
        this.setState({
          productList: respone.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  getCustomer(id) {
    axios({
      method: "get",
      url: `${url}/customers/${id}`
    })
      .then(respone => {
        this.setState({
          customerDetail: respone.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  onUpdateData = data => {
    this.props.onUpdateData(data);
  };
  addCustomer(obj) {
    axios({
      method: "post",
      url: `${url}/orders/add`,
      data: obj,
      headers: {
        "content-type": "application/json"
      }
    })
      .then(() => {
        axios({
          method: "get",
          url: `${url}/orders/list`
        })
          .then(respone => {
            this.props.onClick();
            alert("Thêm đơn hàng thành công");
            this.onUpdateData(respone.data);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        alert("Thêm đơn hàng không thành công");
        console.log(obj);
        console.log(error);
      });
  }
  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
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
      dateShip: this.state.ngay_giaoHang,
      staffOrder: {
        id: 22
      },
      customerOrder: {
        id: this.state.id_cus
      },
      methodPay: this.state.phuongthuc_thanhtoan,
      methodShip: this.state.phuongthuc_giaohang,
      note: this.state.ghi_chu,
      orderDetails: this.state.products,
      discount: this.state.chietkhau,
      costShip: this.state.phi_ship
    };
    if (!data.customerOrder) {
      alert("Thêm đơn hàng không thành công");
      console.log(data);
    } else {
      console.log(data);
      
      this.addCustomer(data);
    }
  };
  handleChangeCus = selectedCus => {
    this.setState({
      id_cus: selectedCus.value
    });
    this.getCustomer(selectedCus.value);
  };
  handleChangeProduct = selectedProduct => {
    if (this.state.products.indexOf(selectedProduct.value) === -1) {
      selectedProduct.value.quantity = 1;
      selectedProduct.value.total = selectedProduct.value.productOrder.retailPrice
      this.setState(
        
        previousState => ({
          products: [...previousState.products, selectedProduct.value]
        }),
        () => {
          console.log(this.state.products);
        }
      );
    } else {
      alert("Sản phẩm đã có trong giỏ hàng");
    }
  };
  pushCustomer = (customerList, optionCus) => {
    if (customerList.length !== 0 && optionCus.length === 0) {
      for (var i = 0; i < customerList.length; i++) {
        var value = customerList[i].id;
        var label = customerList[i].name + " - " + customerList[i].phone;
        optionCus.push({ value: value, label: label });
      }
    }
  };
  pushProduct = (productList, optionProduct) => {
    if (productList.length !== 0 && optionProduct.length === 0) {
      for (var i = 0; i < productList.length; i++) {
        var value = {};
        value.productOrder = productList[i];
        value.quantity = 0;
        value.discount = 0;
        var label = productList[i].name;
        optionProduct.push({ value: value, label: label });
      }
    }
  };
  onDeleteProduct = id => {
    for (var i = 0; i < this.state.products.length; i++) {
      if (this.state.products[i].productOrder.id === id) {
        this.state.products.splice(i, 1);
        this.setState({
          products: this.state.products
        });
      }
    }
  };
  onUpdateQuantity = (id, quantity, discount, total) => {
    var totalM = (100 - discount) / 100;
    this.setState(
      prevState => ({
        products: prevState.products.map(product =>
          product.productOrder.id === id
            ? {
                ...product,
                quantity: quantity,
                discount: discount,
                total: total * totalM
              }
            : product
        )
      }),
    );
  };
  getTotal = () => {
    var total = 0;
    if(this.state.products.length !== 0){
      for (var i = 0; i < this.state.products.length; i++) {
        total = total + parseInt(this.state.products[i].total);
        total = total + parseInt(this.state.phi_ship);
      }
    }
    return (
      total
    );
  };
  render() {
    const selectedCus = undefined;
    const selectedProduct = undefined;

    var eleBuy = undefined;

    const { customerList } = this.state;
    const { customerDetail } = this.state;
    const { productList } = this.state;
    const { products } = this.state;

    this.pushCustomer(customerList, optionCus);
    this.pushProduct(productList, optionProduct);
    if (products.length !== 0) {
      eleBuy = products.map((buyItem, index) => {
        return (
          <BuyItem
            key={index}
            index={index}
            buyItem={buyItem}
            onDeleteProduct={this.onDeleteProduct}
            onUpdateQuantity={this.onUpdateQuantity}
          />
        );
      });
    }
    return (
      <Row>
        <Prompt
          when={!!this.state.name}
          message="Bạn có chắc chắn muốn dừng lại?"
        />
        <Col xs={12}>
          <Form>
            <h4>Thông tin cơ bản </h4>
            <Row>
              <Col xs={8} className="add-col">
                <Container className="add-form">
                  <h5 className="add-product-h6">Thông tin khách hàng</h5>
                  <Form.Row className="add-form-row">
                    <Form.Group as={Col}>
                      <Form.Label>Tên khách hàng</Form.Label>
                      <Select
                        value={selectedCus}
                        onChange={this.handleChangeCus}
                        options={optionCus}
                        placeholder="Nhập tên khách hàng..."
                      />
                    </Form.Group>
                  </Form.Row>
                </Container>
                <Container className="add-form">
                  <h5 className="add-product-h6">Thông tin sản phẩm</h5>
                  <Form.Row className="add-form-row">
                    <Form.Group as={Col}>
                      <Form.Label>Tên sản phẩm</Form.Label>
                      <Select
                        value={selectedProduct}
                        onChange={this.handleChangeProduct}
                        options={optionProduct}
                        placeholder="Nhập tên sản phẩm..."
                      />
                      <Table responsive hover style={{ marginTop: "10px" }}>
                        <thead className="order-table">
                          <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th className="text-center">Đơn vị</th>
                            <th className="text-center">Đơn giá</th>
                            <th className="text-center">Số lượng</th>
                            <th className="text-center">Chiết khấu(%)</th>
                            <th className="text-center">Thành tiền</th>
                            <th className="text-center"> </th>
                          </tr>
                        </thead>
                        <tbody>{eleBuy}</tbody>
                      </Table>
                    </Form.Group>
                  </Form.Row>
                  <hr />
                  <Row style={{ margin: "0px 15px" }}>
                    <Col lg={{ span: 3, offset: 7 }}>
                      <Card.Text>
                        <span className="float-left">Tổng tiền</span>
                        <br />
                        <span className="float-left">Chiết khấu(%)</span>
                        <br />
                        <span className="float-left">Phí giao hàng</span>
                        <br />
                        <span className="float-left">Khách phải trả</span>
                      </Card.Text>
                    </Col>
                    <Col>
                      <Card.Text>
                        <span className="float-right">
                          {products && this.getTotal(products) ? this.getTotal(products) : 0}
                        </span>
                        <br />
                        <span className="float-right">
                          <Form.Control
                            type="number"
                            name="chietkhau"
                            min="0"
                            value={this.state.chietkhau}
                            onChange={this.onChange}
                            style={{
                              padding: "3px",
                              marginLeft: "7px",
                              width: "55px",
                              height: "calc(0.75em + 0.5rem + 2px)"
                            }}
                          />
                        </span>
                        <br />
                        <span className="float-right">
                          <Form.Control
                            type="number"
                            name="phi_ship"
                            min="0"
                            value={this.state.phi_ship}
                            onChange={this.onChange}
                            style={{
                              padding: "3px",
                              marginLeft: "7px",
                              width: "55px",
                              height: "calc(0.75em + 0.5rem + 2px)"
                            }}
                          />
                        </span>
                        <br />
                        <span className="float-right">
                          {products && this.getTotal()
                            ? Math.round(this.getTotal())
                            : 0}
                        </span>
                      </Card.Text>
                    </Col>
                  </Row>
                </Container>
                <Container className="add-form">
                  <Form.Row className="add-form-row">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Xác nhận phương thức thanh toán</Form.Label>
                      <Form.Control
                        as="select"
                        name="phuongthuc_thanhtoan"
                        value={this.state.phuongthuc_thanhtoan}
                        onChange={this.onChange}
                      >
                        <option value="Chuyển khoản">Chuyển khoản</option>
                        <option value="Tiền mặt">Tiền mặt</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Xác nhận phương thức giao hàng</Form.Label>
                      <Form.Control
                        as="select"
                        name="phuongthuc_giaohang"
                        value={this.state.phuongthuc_giaohang}
                        onChange={this.onChange}
                      >
                        <option value="Viettel Post">Viettel Post</option>
                        <option value="Tự gọi ship">Tự gọi ship</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>
                </Container>
              </Col>
              <Col xs={4}>
                <Container className="add-form">
                  <h5 className="add-product-h6">Thông tin đơn hàng</h5>
                  <Form.Row className="add-form-row">
                    <Form.Group as={Col} controlId="formGridName">
                      <Form.Label>Chính sách giá</Form.Label>
                      <Form.Control
                        type="text"
                        name="chinhsachgia"
                        value={
                          customerDetail.Group &&
                          customerDetail.group.defaultPrice
                            ? customerDetail.group.defaultPrice
                            : "Đang chờ"
                        }
                        onChange={this.onChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row className="add-form-row">
                    <Form.Group as={Col} controlId="formGridName">
                      <Form.Label>Áp dụng thuế</Form.Label>
                      <Form.Control
                        type="text"
                        name="apdungthue"
                        value={
                          customerDetail.group &&
                          customerDetail.group.defaultTax
                            ? customerDetail.group.defaultTax
                            : "Đang chờ"
                        }
                        onChange={this.onChange}
                      />
                    </Form.Group>
                  </Form.Row>
                  <Form.Row className="add-form-row">
                    <Form.Group as={Col} controlId="formGridName">
                      <Form.Label>Ngày giao hàng</Form.Label>
                      <Form.Control
                        type="date"
                        name="ngay_giaoHang"
                        value={this.state.ngay_giaoHang}
                        onChange={this.onChange}
                      />
                    </Form.Group>
                  </Form.Row>
                </Container>
                <Container className="add-form">
                  <h5 className="add-product-h6">Ghi chú</h5>
                  <Form.Row className="add-form-row">
                    <Form.Group as={Col} controlId="formGridName">
                      <Form.Control
                        as="textarea"
                        rows="4"
                        name="ghi_chu"
                        value={this.state.ghi_chu}
                        placeholder="Ghi chú cần thiết về đơn hàng..."
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
