import React,{Component} from 'react';
import {Card,Row,Col} from 'react-bootstrap';
import TabViewDatil from './TabViewDetail';
import axios from 'axios';
import PopupFormUpdate from './PopupFormUpdateCus';
import url from '../url'
class CustomerDetail extends Component{
    constructor(props){
        super(props);
        this.state ={
            customerDetail : [],
            staff: [],
            customer_group: [],
        }
    }
    componentDidMount(){
		axios({
			method: 'get',
			url: `${url}/customers/${this.props.id}`
		}).then(respone => {
            this.setState({
                customerDetail: respone.data,
                staff: respone.data.staff,
                customer_group: respone.data.customer_group
            }) 		
		}).catch(error => {
            console.log(error);
		});
    }
    deleteCustomer(){
        axios({
			method: 'delete',
			url: `${url}/customers/${this.props.id}`
		}).then(respone => {
            console.log(respone+"xóa được chưuaaaaaaaaaaa");
		}).catch(error => {
			console.log(error);
        });
    }       
    onDelete = () =>{
       const c = window.confirm("Bạn có chắc chắn muốn xóa khách hàng này?");
       if(c === true){
           console.log(c)
           this.deleteCustomer();
           window.location.replace("/customers")
       }else{
           return;
       }
    }
    onUpdateData = (data) =>{
        this.setState({
            customerDetail: data,
            staff: data.staff,
            customer_group: data.customer_group
        })
    }
    render(){
        const customerDetail = this.state.customerDetail;
        const staff = this.state.staff;     
        const customer_group = this.state.customer_group;
        var moment = require('moment');
        return(
            <div>
                <Row>
                    <Col xl={8}>
                        <Card style={{ width: '100%', margin: "15px" }}>
                        <Row>
                            <Col xl={6}> 
                                <span> 
                                    <h5 className="debt">{customerDetail.name}</h5>
                                </span>
                            </Col>
                        </Row>
                        <Card.Body>
                            <Card.Title style={{marginTop: '30px'}}>Ghi chú</Card.Title>
                                <Card.Text className="cus-note">
                                {(customerDetail.note) ? customerDetail.note : "Hiện tại chưa có ghi chú nào"}
                                </Card.Text>                           
                        </Card.Body>
                        </Card>
                        <Card style={{ width: '100%', margin: "15px" }}>
                            <Card.Body>
                                <TabViewDatil customer={customerDetail}/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="detail-card" style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>Thông tin khách hàng</Card.Title>
                                <Card.Text>
                                    Nhóm khách hàng     :  {(customer_group) ? customer_group.name : "Đang cập nhật"}
                                    <br/>
                                    Mã khách hàng       :  {customerDetail.id}
                                    <br/>
                                    Nhân viên phụ trách(ID) : {(staff) ? staff.name: "Đang cập nhật"}
                                    <br/>
                                    Giới tính           : {(customerDetail.gender) ? "Nam" : "Nữ"}
                                    <br/>
                                    Ngày sinh           : {(customerDetail.dob) ? moment(customerDetail.dob).format('DD/MM/YYYY') : "Đang cập nhật"}
                                    <br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="detail-card" style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>Liên hệ</Card.Title>
                                <Card.Text>
                                    Số điện thoại     :  {customerDetail.phone}
                                    <br/>
                                    Địa chỉ      :  {(customerDetail.address) ? customerDetail.address : "Đang cập nhật" }
                                    <br/>
                                    Email       :  {customerDetail.email}
                                    <br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="detail-card" style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>Ưu đãi</Card.Title>
                                <Card.Text>
                                    Giá mặc định     :  {(customer_group) ? customer_group.default_price : "Đang cập nhật"}
                                    <br/>
                                    Thuế mặc định       :  {(customer_group) ? customer_group.default_tax : "Đang cập nhật"}
                                    <br/>
                                    Chiết khấu : {(customer_group) ? customer_group.discount : "Đang cập nhật"}
                                    <br/>
                                    Phương thức thanh toán           : Đang cập nhật
                                    <br/>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            <hr className="form-line"/>
            <div className="mb-5">
               
                <button type="button" className=" btn btn-danger float-left" onClick={this.onDelete}>Xóa khách hàng</button>
                                     
                <PopupFormUpdate open={this.props.open} customer={customerDetail} onUpdateData={this.onUpdateData}/>   
            </div>
            </div>      
        );
    }
}

export default CustomerDetail;