import React, {Component} from 'react';
import {Form,Col,Button,Row,Container} from 'react-bootstrap';
import axios from 'axios';
class StaffUpdateForm extends Component{
    constructor(props){
        super(props);
        this.state={
          id: '',  
          name: '',
          dob: '',
          gender: '',          
          email: '',
          phone: '',
          note:'', 
          role: ''       
        }
      }
      updateStaff(obj){
        axios({
          method: 'put',
          url: `http://192.168.10.22:8080/staffs/${this.props.staff.id}`,
          data: obj,
			headers: {
                'content-type': 'application/json',
            }
		}).then(() => {
      alert("Sửa thông tin nhân viên thành công");
			axios({
        method: 'get',
        url: `http://192.168.10.22:8080/staffs/${this.props.staff.id}`
      }).then(respone => {
        this.props.onUpdateData(respone.data)
      }).catch(error => {
        console.log(error);
      });
		}).catch(error => {
			console.log(error);
		});
      }
      onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === "gender"){
          value = target.value === '1 '? 1 : 0;
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
            "role": this.state.role,
            "dob": this.state.dob,
            "email": this.state.email,
            "gender": this.state.gender,
            "phoneNumber": this.state.phone,
            "note": this.state.note,
        };
        if(!data.name){
          alert("Tên nhân viên không được để trống!")
        }else{
          this.updateStaff(data);
          this.props.onClick();
        }
      }
      
      componentDidMount(){
          const staff = this.props.staff;
        this.setState({
            id: staff.id,
            name : staff.name,
            dob: staff.dob,
            gender: (staff.gender) ? staff.gender : "",
            role: staff.role,
            email: staff.email,
            phone: staff.phoneNumber,
            note: (staff.note) ? staff.note : "Hiện tại chưa có ghi chú nào",
            
        },()=>{
            
        })
      }
    render(){
      return(
        <Row>
          <Col xs={12}>
          <Form onSubmit={this.onSubmit}>
            <Form.Label><h4>Thông tin cơ bản ("<span style={{color: "red"}}>*</span>" Bắt buộc)</h4></Form.Label>
            <Row>
              <Col xs={8} className="add-col">
                <Container className="add-form">
                    <Form.Row className="add-form-row">
                      <Form.Group as={Col} controlId="formGridName">
                      <Form.Label>Tên nhân viên <span style={{color: "red"}}>*</span></Form.Label>
                      <Form.Control type="name" name="name" value={this.state.name} onChange={this.onChange}/>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridDOB">
                          <Form.Label>Ngày sinh</Form.Label>
                          <Form.Control type="date" name="dob"  onChange={this.onChange}/>
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
                      <Form.Group as={Col} xs={12}controlId="formGridRole">
                        <Form.Label>Role</Form.Label>
                        <Form.Control name="role" value={this.state.role} onChange={this.onChange}/>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row className="add-form-row">
                        <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email <span style={{color: "red"}}>*</span></Form.Label>
                                <Form.Control type="email" name="email" value={this.state.email} onChange={this.onChange} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPhone">
                            <Form.Label>Số điện thoại <span style={{color: "red"}}>*</span></Form.Label>
                            <Form.Control name="phone" value={this.state.phone} onChange={this.onChange} />
                        </Form.Group>
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

export default StaffUpdateForm;