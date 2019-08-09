import React, {Component} from 'react';
import {Form,Col,Button,Row,Container} from 'react-bootstrap';
import axios from 'axios';
import {Prompt} from 'react-router-dom';
import url from '../url'
class CustomerAddForm extends Component{

    constructor(props){
        super(props);
        this.state={
          id: '',  
          name: '',
          dob: '',
          gender: '2',
          address: '',
          email: '',
          phone: '',
          note:'',
          staff:'',
          customerType: '',
        }
      }
      addCustomer(obj){
        axios({
          method: 'put',
          url: `${url}/customers/${this.state.id}`,
          data: obj,
          headers: {
                    'content-type': 'application/json',
                }
        }).then(() => {
          alert("Cập nhật thông tin khách hàng thành công");
          axios({
            method: 'get',
            url: `${url}/customers/${this.state.id}`,
            data: obj,
            headers: {
                      'content-type': 'application/json',
                  }
          }).then(respone =>{
            this.onUpdateData(respone.data)
          }).catch(error =>{
            console.log(error);
          })
          // console.log("response đâyyy");
          // console.log(respone);
        }).catch(error => {
          console.log(error);
        });
      }
      onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === "gender"){
          value = target.value === "1" ? 1 : 0;
        }
        this.setState({
          [name] :value
        }, () =>{
            console.log(this.state);
        });
      }
      onSubmit = (event) => {
        
        event.preventDefault();        
        const data = {
            "id": this.state.id,
            "name": this.state.name,
            "address": this.state.address,
            "dob": this.state.dob,
            "email": this.state.email,
            "gender": this.state.gender,
            "phoneNumber": this.state.phone,
            "note": this.state.note,
            "staff": {
              id: (this.state.staff) ? this.state.staff : null
            },
            "nhomkhachhang":{
              id: this.state.customerType
            }
        };
        if (!data.name || !data.email || ! data.phone) {
          alert("Tên khách hàng, email và số điện thoại không được để trống!");
        }else{              
          this.addCustomer(data);   
          this.props.onClick();   
        }
      }
      componentDidMount(){
          const customer = this.props.customer;
        this.setState({
            id : customer.id,
            name : customer.name,
            dob: (customer.dob) ? customer.dob : "",
            gender: (customer.gender) ? customer.gender : "",
            address: (customer.address) ? customer.address : "",
            email: (customer.email) ? customer.email : "",
            phone: (customer.phoneNumber) ? customer.phoneNumber : "",
            note: (customer.note ? customer.note : " "),
            staff: (customer.staff) ? customer.staff.id : "",
            customerType: (customer.nhomkhachhang) ? customer.nhomkhachhang.id : 0
        })
      }
      onUpdateData= (data) =>{
        this.props.onUpdateData(data);
      }
    render(){
      return(
        <Row>
          <Prompt when={!!this.state.name} message="Bạn có chắc chắn muốn dừng lại?"/>
          <Col xs={12}>
          <Form onSubmit={this.onSubmit}>
            <Form.Label><h4>Thông tin cơ bản ("<span style={{color: "red"}}>*</span>" Bắt buộc)</h4></Form.Label>
            <Row>
              <Col xs={8} className="add-col">
                <Container className="add-form">
                    <Form.Row className="add-form-row">
                      <Form.Group as={Col} controlId="formGridName">
                      <Form.Label>Tên khách hàng <span style={{color: "red"}}>*</span></Form.Label>
                      <Form.Control type="name" name="name" value={this.state.name} onChange={this.onChange}/>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridDOB">
                          <Form.Label>Ngày sinh</Form.Label>
                          <Form.Control type="date" name="dob" value={this.state.dob} onChange={this.onChange}/>
                      </Form.Group>  

                      <Form.Group as={Col} xs={2} controlId="formGridGender">
                      <Form.Label>Giới tính</Form.Label>
                      <Form.Control as="select" name="gender" value={this.state.gender} onChange={this.onChange}>
                          <option >Giới tính</option>
                          <option value={1}>Nam</option>
                          <option value={0}>Nữ</option>
                      </Form.Control>
                      </Form.Group>                    
                    </Form.Row>
                    <Form.Row className="add-form-row">
                      <Form.Group as={Col} xs={12}controlId="formGridAddress">
                        <Form.Label>Địa chỉ</Form.Label>
                        <Form.Control type="address" name="address" value={this.state.address} onChange={this.onChange}/>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row className="add-form-row">
                        <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email <span style={{color: "red"}}>*</span></Form.Label>
                                <Form.Control type="email" name="email" value={this.state.email} placeholder="Nhập email khách hàng" onChange={this.onChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPhone">
                            <Form.Label>Số điện thoại <span style={{color: "red"}}>*</span></Form.Label>
                            <Form.Control name="phone" value={this.state.phone} placeholder="Nhập số điện thoại" onChange={this.onChange} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="add-form-row">
                        <Form.Group as={Col} controlId="formGridCusType">
                                <Form.Label>Nhóm khách hàng</Form.Label>
                                <Form.Control as="select" name="customerType" value={this.state.customerType} onChange={this.onChange} >
                                  <option value={0}>Nhóm khách hàng</option>
                                  <option value={1}>Nhóm 1</option>
                                  <option value={2}>Nhóm 2</option>
                                  <option value={3}>Nhóm 3</option>
                                  <option value={4}>Nhóm 4</option>
                                  <option value={5}>Nhóm 5</option>
                                  <option value={6}>Nhóm 6</option>
                                </Form.Control>
                        </Form.Group>
                        {/* <Form.Group as={Col} controlId="formGridCusProfit">
                                <Form.Label>Ưu đãi</Form.Label>
                                <Form.Control as="select" name="customerProfit" value={this.state.customerProfit} onChange={this.onChange} >
                                  <option value={1}>Nhóm 1</option>
                                  <option value={2}>Nhóm 2</option>
                                  <option value={3}>Nhóm 3</option>
                                  <option value={4}>Nhóm 4</option>
                                </Form.Control>
                        </Form.Group> */}
                    </Form.Row>    
                                                                         
              </Container>                  
            </Col>
            <Col xs={4}> 
              <Container className="add-form">
                <Form.Row className="add-form-row" >
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Mô tả</Form.Label>
                    <Form.Control as="textarea" rows="5" name="note" value={this.state.note} onChange={this.onChange}/>
                  </Form.Group>                 
                </Form.Row> 
                <Form.Row className="add-form-row" >
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Nhân viên chăm sóc</Form.Label>
                    <Form.Control name="staff" value={this.state.staff} placeholder="" onChange={this.onChange}/>
                  </Form.Group>
                </Form.Row>                                                    
                </Container> 
              </Col>                     
          </Row>
          <hr className="form-line"/>          
          <Button variant="primary" type="submit" className="float-right">
            Lưu thông tin
          </Button>  
          
        </Form>
        </Col>                
        </Row>
      );
    }
}

export default CustomerAddForm;