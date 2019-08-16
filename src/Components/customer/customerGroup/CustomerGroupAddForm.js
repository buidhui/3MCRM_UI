import React, {Component} from 'react';
import {Form,Col,Button,Row,Container} from 'react-bootstrap';
import axios from 'axios';
import url from  '../../url'
class CustomerAddForm extends Component{

    constructor(props){
        super(props);
        this.state={
          name: '',
          description:'',
          defaultPrice: '',
          defaultTax:'',
          discount:'',     
        }
      }
      onUpdateData = (data) =>{
        this.props.onUpdateData(data)
      }
      addCustomer(obj){
        axios({
          method: 'post',
          url: `${url}/customer-group/add`,
          data: obj,
          headers: {
                    'content-type': 'application/json',
                }
        }).then(respone => {
          alert("Thêm mới nhóm khách hàng thành công")
          axios({
            method: 'get',
            url: `${url}/customer-group/list`,
          }).then(respone => {
            this.onUpdateData(respone.data)
          }).catch(error => {
            console.log(error);
          });          
        }).catch(error => {
          console.log(error);
          alert("Thêm mới nhóm khách hàng không thành công")
        });
          }
      onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === "gender"){
          value = target.value === 'true' ? true : false;
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
            "name": this.state.name,
            "note": this.state.description,
            "defaultPrice": this.state.defaultPrice,
            "defaultTax": this.state.defaultTax,
            "discount": this.state.discount,
        };
        if(!data.name){
          alert("Tên nhóm khách hàng không được để trống!")
        }else{
          console.log(data);
          this.addCustomer(data); 
          this.props.onClick();
        }
      }
    render(){
      return(
       
        <Row>
          <Col lg={12}>
          <Form onSubmit={this.onSubmit}>
            <Form.Label><h4>Thông tin cơ bản </h4></Form.Label>
            <Row>
              <Col lg={8} className="add-col">
                <Container className="add-form">
                    <Form.Row className="add-form-row">
                      <Form.Group as={Col} >
                      <Form.Label>Tên nhóm khách hàng <span style={{color: "red"}}>*</span></Form.Label>
                      <Form.Control type="text" name="name" value={this.state.name} onChange={this.onChange}/>
                      </Form.Group>

                      {/* <Form.Group as={Col} >
                          <Form.Label>Ngày khởi tạo</Form.Label>
                          <Form.Control type="date" name="date" value={(this.state.date) ? this.state.date : "15/7/2019"} onChange={this.onChange}/>
                      </Form.Group>                   */}
                    </Form.Row>
                    <Form.Row className="add-form-row">
                        <Form.Group as={Col} >
                                <Form.Label>Giá mặc định </Form.Label>
                                <Form.Control type="text" name="defaultPrice" value={this.state.defaultPrice} onChange={this.onChange} />
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>Thuế mặc định</Form.Label>
                            <Form.Control type="text" name="defaultTax" value={this.state.defaultTax} onChange={this.onChange} />
                        </Form.Group>
                        <Form.Group as={Col} >
                                <Form.Label>Chiết khấu</Form.Label>
                                <Form.Control type="text" name="discount" value={this.state.discount} onChange={this.onChange} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="add-form-row">
                        
                        {/* <Form.Group as={Col} >
                            <Form.Label>Phương thức thanh toán</Form.Label>
                            <Form.Control type="text" name="payMethod" value={this.state.payMethod} onChange={this.onChange} />
                        </Form.Group> */}
                    </Form.Row>                                                                           
              </Container>                  
            </Col>
            <Col lg={4}> 
              <Container className="add-form">
                <Form.Row className="add-form-row" >
                  <Form.Group as={Col} >
                    <Form.Label>Mô tả</Form.Label>
                    <Form.Control as="textarea" rows="5" name="description" value={this.state.description}  onChange={this.onChange}/>
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