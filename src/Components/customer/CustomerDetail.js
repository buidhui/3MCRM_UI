import React, { Component } from 'react';
import { Card, Row, Col, Carousel } from 'react-bootstrap';
import TabViewDatil from './TabViewDetail';
import axios from 'axios';
import PopupFormUpdate from './PopupFormUpdateCus';
import BreadCrum from "../breadcums/BreadCrumCusDetail"
import url from '../url'
class CustomerDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerDetail: [],
            staff: [],
            customer_group: [],
        }
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: `${url}/customers/${this.props.id}`
        }).then(respone => {
            console.log(respone.data)
            this.setState({
                customerDetail: respone.data,
                staff: respone.data.staff,
                customer_group: respone.data.groups
            })
        }).catch(error => {
            console.log(error);
        });
    }
    deleteCustomer() {
        axios({
            method: 'delete',
            url: `${url}/customers/${this.props.id}`
        }).then(respone => {
            console.log(respone + "xóa được chưuaaaaaaaaaaa");
        }).catch(error => {
            console.log(error);
        });
    }
    onDelete = () => {
        const c = window.confirm("Bạn có chắc chắn muốn xóa khách hàng này?");
        if (c === true) {
            console.log(c)
            this.deleteCustomer();
            window.location.replace("/customers")
        } else {
            return;
        }
    }
    onUpdateData = (data) => {
        this.setState({
            customerDetail: data,
            staff: data.staff,
            customer_group: data.groups
        })
    }
    render() {
        const customerDetail = this.state.customerDetail;
        const staff = this.state.staff;
        const {customer_group} = this.state;
        let CarItem = undefined
        if(customer_group !== undefined){
            CarItem = customer_group.map((group)=>{
                return <Carousel.Item key={group.id}>
                Nhóm khách hàng     :  {group.name}
                <br/>
                Giá mặc định     :  {group.default_price }
                <br/>
                Thuế mặc định       :  {group.default_tax}
                <br/>
                Chiết khấu : {group.discount}
                <br/>
                Phương thức thanh toán           : Đang cập nhật
                <br/>
                </Carousel.Item>;
            })
        }
       
        var moment = require('moment');
        return (
            <div>
                <Row>
                <BreadCrum customer={customerDetail}/>
                </Row>
                <Row>
                    <Col  xl={8}>
                        <Card style={{ width: '100%', margin: "15px 15px 15px 0px" }}>
                            <Row>
                                <Col xl={6}>
                                    <span>
                                    
                                        <h5 className="debt"><i className="fas fa-user fa-2x" />    {customerDetail.name}</h5>
                                    </span>
                                </Col>
                                <Col xl={6}>
                                    <span>
                                        <h5 className="debt float-right">Điểm tích lũy : {customerDetail.point} <i className="fas fa-trophy"></i></h5>
                                    </span>
                                </Col>
                            </Row>
                            <Card.Body>
                                <Card.Title style={{ marginTop: '15px' }}>Ghi chú</Card.Title>
                                <Card.Text className="cus-note">
                                    {(customerDetail.note) ? customerDetail.note : "Hiện tại chưa có ghi chú nào"}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '100%', margin: "15px 15px 15px 0px " }}>
                            <Card.Body>
                                <TabViewDatil customer={this.props.id} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="detail-card" style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>Thông tin khách hàng</Card.Title>
                                <Card.Text>
                                    Mã khách hàng       :  {customerDetail.id}
                                    <br />
                                    Nhân viên phụ trách : {(staff) ? staff.name : "Đang cập nhật"}
                                    <br />
                                    Giới tính           : {(customerDetail.gender) ? "Nam" : "Nữ"}
                                    <br />
                                    Ngày sinh           : {(customerDetail.dob) ? moment(customerDetail.dob).format('DD/MM/YYYY') : "Đang cập nhật"}
                                    <br />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="detail-card" style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>Liên hệ</Card.Title>
                                <Card.Text>
                                    Số điện thoại     :  {customerDetail.phone}
                                    <br />
                                    Địa chỉ      :  {(customerDetail.address) ? customerDetail.address : "Đang cập nhật"}
                                    <br />
                                    Email       :  {customerDetail.email}
                                    <br />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="detail-card" style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>Ưu đãi</Card.Title>
                                <Carousel>
                                {CarItem}                                
                                </Carousel>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr className="form-line" />
                <div className="mb-5">

                    <button type="button" className=" btn btn-danger float-left" onClick={this.onDelete}>Xóa khách hàng</button>

                    <PopupFormUpdate open={this.props.open} customer={customerDetail} onUpdateData={this.onUpdateData} />
                </div>
            </div>
        );
    }
}

export default CustomerDetail;