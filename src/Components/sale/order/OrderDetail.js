import React, { Component } from 'react';
import { Card, Row, Col, Table } from 'react-bootstrap';
import axios from 'axios';
import OrderItem from './OrderDetailItem';
//import Status from './Status';
import url from '../../url'
class CustomerDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: '',
            orderDetail: [{}],
            customerList: []
        }
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: `${url}/orderdetails/${this.props.id}`
        }).then(respone => {
            console.log(respone.data)
            this.setState({
                orderDetail: respone.data,
            })
        }).catch(error => {
            console.log(error);
        });

    }
    updateStatus(status) {
        axios({
            method: 'put',
            url: `${url}/orders/${this.props.id}`,
            data: {
                "id": this.props.id,
                "state": status
            }
        }).then(() => {
            axios({
                method: 'get',
                url: `${url}/orderdetails/${this.props.id}`
            }).then(respone => {
                this.setState({
                    orderDetail: respone.data,
                })
            }).catch(error => {
                console.log(error);
            });
        }).catch(error => {
            console.log(error);
        });
    }
    changeStatus = (status) => {
        this.updateStatus(status);
    }
    render() {
        var moment = require('moment');
        var { orderDetail } = this.state;
        const eleOrder = orderDetail.map((orderItem, index) => {
            return <OrderItem key={index} index={index} orderItem={orderItem} ></OrderItem>;
        });
        function formatMoney(
            amount,
            decimalCount = 2,
            decimal = "",
            thousands = ","
        ) {
            try {
                decimalCount = Math.abs(decimalCount);
                decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

                const negativeSign = amount < 0 ? "-" : "";

                let i = parseInt(
                    (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
                ).toString();
                let j = i.length > 3 ? i.length % 3 : 0;

                return (
                    negativeSign +
                    (j ? i.substr(0, j) + thousands : "") +
                    i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
                    (decimalCount
                        ? decimal +
                        Math.abs(amount - i)
                            .toFixed(decimalCount)
                            .slice(4)
                        : "")
                );
            } catch (e) {
                console.log(e);
            }
        }
        return (

            <div>
                <Row>
                    <Col xl={8}>
                        <Card style={{ width: '100%', margin: "15px" }}>
                            <Card.Body>
                                <Card.Title >Thông tin khách hàng</Card.Title>
                                <Row>
                                    <Col>
                                        <h6>Tên khách hàng</h6>
                                        <Card.Text className="cus-note">
                                            {orderDetail[0].orderOrder && (orderDetail[0].orderOrder.customerOrder.name) ? orderDetail[0].orderOrder.customerOrder.name : "Đang cập nhật"}
                                        </Card.Text>
                                    </Col>
                                    <Col>
                                        <h6>Số điện thoại   </h6>
                                        <Card.Text className="cus-note">
                                            {orderDetail[0].orderOrder && orderDetail[0].orderOrder.customerOrder.phone}
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h6 style={{ marginTop: "7px" }}>Địa chỉ   </h6>
                                        <Card.Text className="cus-note">
                                            {orderDetail[0].orderOrder && (orderDetail[0].orderOrder.customerOrder.address) ? orderDetail[0].orderOrder.customerOrder.address : "Chưa có"}
                                        </Card.Text>
                                    </Col>
                                </Row>

                            </Card.Body>
                        </Card>
                        <Card style={{ width: '100%', margin: "15px" }}>
                            <Card.Body>
                                <Card.Title >Thông tin sản phẩm</Card.Title>
                                <Table responsive hover>
                                    <thead className="order-table">
                                        <tr>
                                            <th >Mã sản phẩm</th>
                                            <th >Tên sản phẩm</th>
                                            <th className="text-center">Đơn vị</th>
                                            <th className="text-center">Đơn giá</th>
                                            <th className="text-center">Số lượng</th>
                                            <th className="text-center">Thành tiền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {eleOrder}
                                    </tbody>
                                </Table>

                                <Row>
                                    <Col lg={{ span: 3, offset: 6 }}>
                                        <Card.Text>
                                            <span className="float-left">Tổng tiền</span>
                                            <br />
                                            <span className="float-left">Chiết khấu</span>
                                            <br />
                                            <span className="float-left">Phí giao hàng</span>
                                            <br />
                                            <span className="float-left">Khách phải trả</span>
                                        </Card.Text>
                                    </Col>
                                    <Col>
                                        <Card.Text>
                                            <span className="float-right">{orderDetail[0].orderOrder && formatMoney(orderDetail[0].orderOrder.totalMoney) + " VNĐ"}</span>
                                            <br />
                                            <span className="float-right">{orderDetail[0] && (orderDetail[0].discount) ? orderDetail[0].discount + "%" : "0%"}</span>
                                            <br />
                                            <span className="float-right">{orderDetail[0].orderOrder && (orderDetail[0].orderOrder.costShip) ? formatMoney(orderDetail[0].orderOrder.costShip) + " VNĐ" : "0 VNĐ"}</span>
                                            <br />
                                            <span className="float-right">{orderDetail[0].orderOrder && formatMoney(orderDetail[0].orderOrder.totalMoney * (100 - orderDetail[0].discount) / 100) + " VNĐ"}</span>
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '100%', margin: "15px" }}>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Card.Text className="cus-note">
                                            <span style={{ textTransform: "uppercase", marginBottom: "0px", marginLeft: "75px" }}>phương thức thanh toán</span>
                                            <span style={{ marginRight: "35px" }} className="float-right" >{orderDetail[0].orderOrder && (orderDetail[0].orderOrder.method_pay) ? orderDetail[0].orderOrder.method_pay : "Chưa có"}</span>
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '100%', margin: "15px" }}>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Card.Text className="cus-note">
                                            <span style={{ textTransform: "uppercase", marginBottom: "0px", marginLeft: "75px" }}>phương thức giao hàng</span>
                                            <span style={{ marginRight: "35px" }} className="float-right" >{orderDetail[0].orderOrder && (orderDetail[0].orderOrder.method_ship) ? orderDetail[0].orderOrder.method_ship : "Chưa có"}</span>
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="detail-card" style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>Thông tin đơn hàng</Card.Title>
                                <Row>
                                    <Col>
                                        <h6 style={{ marginTop: "7px" }}>Chính sách giá   </h6>
                                        <Card.Text className="cus-note">
                                            {orderDetail[0].orderOrder && (orderDetail[0].orderOrder.customerOrder.customerGroup) ? orderDetail[0].orderOrder.customerDH.customerGroup.defaultPrice : "Đang cập nhật"}
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h6 style={{ marginTop: "7px" }}>Áp dụng thuế  </h6>
                                        <Card.Text className="cus-note">
                                            {orderDetail[0].orderOrder
                                                && (orderDetail[0].orderOrder.customerOrder.customerGroup)
                                                ? orderDetail[0].orderOrder.customerOrder.customerGroup.defaultTax : "Đang cập nhật"}
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h6 style={{ marginTop: "7px" }}> Ngày đặt hàng   </h6>
                                        <Card.Text className="cus-note">
                                            {orderDetail[0].orderOrder &&
                                                (orderDetail[0].orderOrder.dateOrder) ?
                                                moment(orderDetail[0].orderOrder.dateOrder).format('DD/MM/YYYY') : "Chưa có"}

                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h6 style={{ marginTop: "7px" }}> Trạng thái đơn hàng   </h6>
                                        <Card.Text className="cus-note">
                                            {orderDetail[0].orderOrder &&
                                                (orderDetail[0].orderOrder.state) ? "Hoàn thành" : "Đang thực hiện"}

                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card className="detail-card" style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>Ghi chú</Card.Title>
                                <Card.Text className="cus-note">
                                    {orderDetail[0].orderOrder &&
                                        (orderDetail[0].orderOrder.note) ? orderDetail[0].orderOrder.note : "Không có ghi chú nào về đơn hàng"}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
                <hr className="form-line" />
            </div>
        );
    }
}

export default CustomerDetail;