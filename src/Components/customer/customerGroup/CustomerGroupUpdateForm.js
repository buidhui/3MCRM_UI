import React, {Component} from 'react';
import {Form,Col,Button,Row,Container} from 'react-bootstrap';
import axios from 'axios';
import url from  '../../url'
class CustomerAddForm extends Component{

    constructor(props){
        super(props);
        this.state={
          id: '',  
          name: '',
          description:'',
          defaultPrice: '',
          defaultTax:'',
          discount:'',     
        }
      }
      addCustomer(obj){
        axios({
          method: 'put',
          url: `${url}/nhomkhachhang/${this.props.group.id}`,
          data: obj,
          headers: {
                    'content-type': 'application/json',
                }
        }).then(respone => {
          console.log("response dc hay khong");
          console.log(respone);
        }).catch(error => {
          console.log(error);
          alert("Cập nhật nhóm khách hàng không thành công")
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
            "id": this.state.id,
            "ten": this.state.name,
            "ghichu": this.state.description,
            "giaMacdinh": this.state.defaultPrice,
            "thueMacdinh": this.state.defaultTax,
            "chietkhau": this.state.discount,
        };
        if(!data.ten){
          alert("Tên nhóm khách hàng không được để trống!")
        }else{
          console.log(data);
          this.addCustomer(data); 
          this.props.onClick();
        }
      }
      componentDidMount(){
          const group = this.props.group;
        this.setState({
            id : group.id,
            name : group.ten,
            description: group.ghichu,
            defaultPrice: group.giaMacdinh,
            defaultTax: group.thueMacdinh,
            discount: group.chietkhau,
        },()=>{
          console.log(this.state);
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
            <Col xs={4}> 
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