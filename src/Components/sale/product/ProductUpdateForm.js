import React, {Component} from 'react';
import {Form,Col,Button,Row,Container} from 'react-bootstrap';
import axios from 'axios';
import {Prompt} from 'react-router-dom';
import url from '../../url'
class CustomerAddForm extends Component{

    constructor(props){
        super(props);
        this.state={
          ten: '',  
          xuat_su: '',
          hang_sx: '',
          so_luong: '',
          gia_nhap: '',
          mo_ta: '',
          thue: '',
          gia_xuatbuon:'',
          gia_xuatle:'',
          loai_sp: '',
          don_vi:''
        }
      }
      addCustomer(obj){
        axios({
          method: 'put',
          url: `${url}/products/${this.props.product.id}`,
          data: obj,
          headers: {
                    'content-type': 'application/json',
                }
        }).then(() => {
          alert("Cập nhật thông tin hàng hóa thành công");
          axios({
            method: 'get',
            url: `${url}/products/list`,
          }).then(respone =>{
            this.onUpdateData(respone.data)
          }).catch(error =>{
            console.log(error);
          })
        }).catch(error => {
          alert("Cập nhật thông tin hàng hóa không thành công");
          console.log(error);
        });
      }
      onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
          [name] :value
        }, () =>{
            console.log(this.state);
        });
      }
      onSubmit = (event) => {
       
        event.preventDefault();        
        const data = {
          "name": this.state.ten,
          "origin": (this.state.xuat_su) ? this.state.xuat_su :null,
          "brand": (this.state.hang_sx) ? this.state.hang_sx : null,
          "quantity": (this.state.so_luong) ? this.state.so_luong : null,
          "purchasePrice": (this.state.gia_nhap) ? this.state.gia_nhap : null,
          "description": (this.state.mo_ta) ? this.state.mo_ta: null,
          "tax": (this.state.thue) ? this.state.thue : null,
          "wholesalePrice" : (this.state.gia_xuatbuon) ? this.state.gia_xuatbuon : null,
          "retailPrice": (this.state.gia_xuatle) ? this.state.gia_xuatle : null,
          "catName": (this.state.loai_sp) ? this.state.loai_sp : null,
          "unit": (this.state.don_vi) ? this.state.don_vi : null
        };
        if(!data.name){
          alert("Tên hàng hóa không được để trống!")
        }else if(!data.wholesalePrice || !data.retailPrice){
          alert("Giá bán hàng hóa không được để trống!")
        }else{  
          console.log(data);
          this.addCustomer(data);      
          this.props.onClick();
        }
      }
      componentDidMount(){
          const product = this.props.product;
        this.setState({
            ten : product.name,
            xuat_su : (product.origin) ? product.origin : "Đang cập nhật",
            hang_sx: (product.brand) ? product.brand : "Đang cập nhật",
            so_luong: (product.quantity) ? product.quantity : 0,
            gia_nhap: (product.purchasePrice) ? product.purchasePrice : 0,
            mo_ta: (product.description) ? product.description : "Đang cập nhật",
            thue: (product.tax) ? product.tax : 0,
            gia_xuatbuon: (product.wholesalePrice) ? product.wholesalePrice : 0,
            gia_xuatle: (product.retailPrice) ? product.retailPrice : 0,
            loai_sp: (product.catName) ? product.catName : "Đang cập nhật",
            don_vi: (product.unit) ? product.unit : "Đang cập nhật"
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
          <Form >
            <h4>Thông tin cơ bản </h4>
            <Row>
              <Col xs={8} className="add-col">
                <Container className="add-form">
                    <Form.Row className="add-form-row">
                      <Form.Group as={Col} controlId="formGridName">
                      <Form.Label>Tên sản phẩm</Form.Label>
                      <Form.Control type="text" name="ten" value={this.state.ten} placeholder="Nhập tên sản phẩm" onChange={this.onChange}/>
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridGender">
                      <Form.Label>Mã sản phẩm</Form.Label>
                      <Form.Control type="text" name="id" value="Tự tạo trong database"  onChange={this.onChange}>
                      </Form.Control>
                      </Form.Group>                    
                    </Form.Row>
                    <Form.Row className="add-form-row">
                      <Form.Group as={Col} xs={12}controlId="formGridxuat_xu">
                        <Form.Label>Mô tả</Form.Label>
                        <Form.Control as="textarea" rows="5" name="mo_ta" value={this.state.mo_ta} placeholder="Nhập mô tả về sản phẩm" onChange={this.onChange}/>
                      </Form.Group>
                    </Form.Row>                                                                        
              </Container>
              <Container className="add-form">
              <h5 className="add-product-h6">Giá sản phẩm</h5>
                    <Form.Row className="add-form-row">
                      <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label>Giá bán lẻ</Form.Label>
                              <Form.Control type="number" name="gia_xuatle" value={this.state.gia_xuatle} placeholder="Nhập giá bán lẻ" onChange={this.onChange} />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridPhone">
                          <Form.Label>Giá bán buôn</Form.Label>
                          <Form.Control type="number" name="gia_xuatbuon" value={this.state.gia_xuatbuon} placeholder="Nhập giá bán buôn" onChange={this.onChange} />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row className="add-form-row">
                      <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label>Giá nhập</Form.Label>
                              <Form.Control type="number" name="gia_nhap" value={this.state.gia_nhap} placeholder="Nhập giá nhập sản phẩm" onChange={this.onChange} />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridPhone">
                          <Form.Label>Thuế</Form.Label>
                          <Form.Control type="number" name="thue" value={this.state.thue} placeholder="Nhập thuể của sản phẩm" onChange={this.onChange} />
                      </Form.Group>
                    </Form.Row>    
                                                                         
              </Container>
              <Container className="add-form">
              <h5 className="add-product-h6">Kho</h5>
                    <Form.Row className="add-form-row">
                      <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label>Số lượng</Form.Label>
                              <Form.Control type="number" name="so_luong" value={this.state.so_luong} placeholder="Nhập hàng còn trong kho" onChange={this.onChange} />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridPhone">
                          <Form.Label>Đơn vị</Form.Label>
                          <Form.Control type="text" name="don_vi"  value={this.state.don_vi} placeholder="(Chiếc, cái ....)" onChange={this.onChange} />
                      </Form.Group>
                    </Form.Row>
                      
                                                                         
              </Container>                                
            </Col>
            <Col xs={4}> 
              <Container className="add-form">
              <h5 className="add-product-h6">Giá sản phẩm</h5>
                <Form.Row className="add-form-row" >
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Phân loại</Form.Label>
                    <Form.Control type="text" name="loai_sp" value={this.state.loai_sp} onChange={this.onChange}>
                    </Form.Control>
                  </Form.Group>                 
                </Form.Row> 
                <Form.Row className="add-form-row" >
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Nhãn hiệu</Form.Label>
                    <Form.Control type="text" name="hang_sx" value={this.state.hang_sx} placeholder="Dell" onChange={this.onChange}/>
                  </Form.Group>
                </Form.Row>
                <Form.Row className="add-form-row" >
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Xuất xứ</Form.Label>
                    <Form.Control  type="text" name="xuat_su" value={this.state.xuat_su}placeholder="Hoa Kì" onChange={this.onChange}/>
                  </Form.Group>
                </Form.Row>                                                      
                </Container>
                 
              </Col>                     
          </Row>
          <hr className="form-line"/>
          {/* <Link to="/customers">  */}
          <Button variant="primary" type="submit" className="float-right" onClick={this.onSubmit}> 
            Lưu thông tin
          </Button>
            {/* </Link> */}
        </Form>
        </Col>                
        </Row>
      );
    }
}

export default CustomerAddForm;