import React,{Component} from 'react';
import {Card,Row,Col} from 'react-bootstrap';
import axios from 'axios';
import PopupFormUpdateGroup from './PopupFormUpdateGroup';
import BreadCrum from "../../breadcums/BreadCrumCusGroupDetail"
import url from '../../url'
class CustomerDetail extends Component{
    constructor(props){
        super(props);
        this.state ={
            groupDetail : [],
        }
    }
    componentDidMount(){
		axios({
			method: 'get',
			url: `${url}/customer-group/${this.props.id}`
		}).then(respone => {
            console.log(respone)
            if(!respone.data){
                alert("Không thể lấy thông tin nhóm khách hàng")
            }else{
                this.setState({
                groupDetail: respone.data,
            }) 	
            }	
		}).catch(error => {
            console.log(error);
            alert("Không thể lấy thông tin nhóm khách hàng")
		});
    }
    // componentDidUpdate(){
	// 	axios({
	// 		method: 'get',
	// 		url: `http://5d2be65c8c90070014971e78.mockapi.io/customer/${this.props.id}`
	// 	}).then(respone => {
    //         this.setState({
    //             customerDetail: respone.data,
    //         }) 		
	// 	}).catch(error => {
    //         console.log(error.status);
	// 	});
    // }
    deleteCustomer(){
        axios({
			method: 'delete',
			url: `${url}/${this.props.id}`
		}).then(respone => {
            console.log(respone+"xóa được chưuaaaaaaaaaaa");
		}).catch(error => {
			console.log(error);
        });
    }       
    onDelete = () =>{
        this.deleteCustomer();
    }
    onUpdateData =(data) =>{
        this.setState({
            groupDetail: data
        })
    }
    render(){
        const groupDetail = this.state.groupDetail;
        return(
            <div>
                <Row>
                <BreadCrum customer={groupDetail}/>
                </Row>
                <Row>
                    <Col xl={8}>
                        <Card className="detail-card" style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title >Thông tin cơ bản</Card.Title>
                                    <Row>
                                        <Col >
                                        <Card.Subtitle><h6>Tên nhóm</h6></Card.Subtitle>
                                            <Card.Text className="cus-note">
                                                {(groupDetail.name) ? groupDetail.name : "Đang cập nhật"}
                                            </Card.Text>  
                                        </Col>
                                        <Col >
                                        <Card.Subtitle><h6>Mã nhóm</h6></Card.Subtitle>
                                            <Card.Text className="cus-note">
                                                {(groupDetail.id) ? groupDetail.id : "Đang cập nhật"}
                                            </Card.Text>  
                                        </Col>
                                    </Row>                                                                                                                                
                            </Card.Body>
                        </Card>
                        <Card className="detail-card" style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>Thông tin chi tiết khác</Card.Title>                                                                   
                                <Row>
                                    <Col >
                                    <Card.Subtitle className="cus-sub"><h6>Giá mặc định</h6></Card.Subtitle>
                                        <Card.Text className="cus-note">
                                            {(groupDetail.defaultPrice) ? groupDetail.defaultPrice : "Đang cập nhật"}
                                        </Card.Text>  
                                    </Col>
                                    <Col >
                                    <Card.Subtitle className="cus-sub"><h6>Thuế mặc định</h6></Card.Subtitle>
                                        <Card.Text className="cus-note">
                                            {(groupDetail.defaultTax) ? groupDetail.defaultTax : "Đang cập nhật"}
                                        </Card.Text>  
                                    </Col>
                                </Row>
                                <Row>
                                    <Col >
                                    <Card.Subtitle className="cus-sub"><h6>Chiết khấu</h6></Card.Subtitle>
                                        <Card.Text className="cus-note">
                                            {(groupDetail.discount) ? groupDetail.discount + "%" : "Đang cập nhật"}
                                        </Card.Text>  
                                    </Col>
                                    <Col >
                                    <Card.Subtitle className="cus-sub"><h6>Số lượng khách hàng trong nhóm</h6></Card.Subtitle>
                                        <Card.Text className="cus-note">
                                            {(groupDetail.quantity) ? groupDetail.quantity : 0}
                                        </Card.Text>  
                                    </Col>
                                </Row>                                                                  
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="detail-card" style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>Mô tả</Card.Title>
                                <Card.Text className="cus-note">
                                {(groupDetail.note) ? groupDetail.note : "Đang cập nhật"}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            <hr className="form-line"/>
            <div className="mb-5">                         
                <PopupFormUpdateGroup open={this.props.open} group={groupDetail} onUpdateData={this.onUpdateData} />   
            </div>
            </div>      
        );
    }
}

export default CustomerDetail;