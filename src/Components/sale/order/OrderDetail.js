import React, { Component } from 'react';
import { Card, Row, Col, Table } from 'react-bootstrap';
import axios from 'axios';
import OrderItem from './OrderDetailItem';
import Status from './Status';
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
            this.setState({
                orderDetail: respone.data,
            })
        }).catch(error => {
            console.log(error);
        });

    }
    updateStatus(status){
        axios({
            method: 'put',
            url: `${url}/orders/${this.props.id}`,
            data:{
                "idDonhang" : this.props.id,
                "trangthai" : status
            }
        }).then( () => {
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
    changeStatus= (status) => {
        console.log(status)
        this.updateStatus(status);
    }
    render() {
        var moment = require('moment');
        var { orderDetail } = this.state;
        const eleOrder = orderDetail.map((orderItem, index) => {
            return <OrderItem key={index} index={index} orderItem={orderItem} ></OrderItem>;
        });
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
                                            {orderDetail[0].ctDonHang && (orderDetail[0].ctDonHang.customerDH.name) ? orderDetail[0].ctDonHang.customerDH.name : "Đang cập nhật"}
                                        </Card.Text>
                                    </Col>
                                    <Col>
                                        <h6>Số điện thoại   </h6>
                                        <Card.Text className="cus-note">
                                            {orderDetail[0].ctDonHang && orderDetail[0].ctDonHang.customerDH.phoneNumber}
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h6 style={{ marginTop: "7px" }}>Địa chỉ   </h6>
                                        <Card.Text className="cus-note">
                                            {orderDetail[0].ctDonHang && (orderDetail[0].ctDonHang.customerDH.address) ? orderDetail[0].ctDonHang.customerDH.address : "Chưa có"}
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
                                            <span className="float-right">{orderDetail[0].ctDonHang && orderDetail[0].ctDonHang.tong_tien}</span>
                                            <br />
                                            <span className="float-right">{orderDetail[0].ctDonHang && (orderDetail[0].ctDonHang.chiet_khau) ? orderDetail[0].ctDonHang.chiet_khau +"%" : "0%" }</span>
                                            <br />
                                            <span className="float-right">{orderDetail[0].ctDonHang && (orderDetail[0].ctDonHang.phi_giaohang) ? orderDetail[0].ctDonHang.phi_giaohang +" VNĐ" : "0 VNĐ" }</span>
                                            <br />
                                            <span className="float-right">{orderDetail[0].ctDonHang && orderDetail[0].ctDonHang.tong_tien +" VNĐ"}</span>
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
                                            <span style={{ marginRight: "35px" }} className="float-right" >{orderDetail[0].ctDonHang && (orderDetail[0].ctDonHang.phuongthuc_thanhtoan) ? orderDetail[0].ctDonHang.phuongthuc_thanhtoan : "Chưa có"}</span>
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
                                            <span style={{ marginRight: "35px" }} className="float-right" >{orderDetail[0].ctDonHang && (orderDetail[0].ctDonHang.phuongthuc_giaohang) ? orderDetail[0].ctDonHang.phuongthuc_giaohang : "Chưa có"}</span>
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
                                            {orderDetail[0].ctDonHang && (orderDetail[0].ctDonHang.customerDH.nhomkhachhang) ? orderDetail[0].ctDonHang.customerDH.nhomkhachhang.giaMacdinh : "Đang cập nhật"}
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h6 style={{ marginTop: "7px" }}>Áp dụng thuế  </h6>
                                        <Card.Text className="cus-note">
                                            {orderDetail[0].ctDonHang 
                                                && (orderDetail[0].ctDonHang.customerDH.nhomkhachhang) 
                                                ? orderDetail[0].ctDonHang.customerDH.nhomkhachhang.thueMacdinh : "Đang cập nhật"}
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h6 style={{ marginTop: "7px" }}> Ngày đặt hàng   </h6>
                                        <Card.Text className="cus-note">
                                            {orderDetail[0].ctDonHang && 
                                                (orderDetail[0].ctDonHang.ngay_dathang) ? 
                                                moment(orderDetail[0].ctDonHang.ngay_dathang).format('DD/MM/YYYY') : "Chưa có"}
                                                
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Row> 
                                    <Col>
                                        <h6 style={{ marginTop: "7px" }}> Trạng thái đơn hàng   </h6>
                                        <Card.Text style={{padding: "7px"}}>
                                            {orderDetail[0].ctDonHang && 
                                                (orderDetail[0].ctDonHang.trangthai) ? "Hoàn thành" : "Đang thực hiện"}   
                                             
                                        </Card.Text>
                                        
                                    </Col>
                                    <Col>
                                        <Status orderDetail={orderDetail[0].ctDonHang && orderDetail[0].ctDonHang} changeStatus={this.changeStatus}/>
                                    </Col>
                                    </Row>
                            </Card.Body>
                        </Card>
                        <Card className="detail-card" style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>Ghi chú</Card.Title>
                                <Card.Text className="cus-note">
                                    Trong database không có 
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