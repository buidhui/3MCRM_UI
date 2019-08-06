import React, {Component} from 'react';
import {Form,Col,Row,Container,Button} from 'react-bootstrap';
import axios from 'axios';
import {Link,Prompt} from 'react-router-dom';
import url from '../../url'
import Select from 'react-select';
const optionCat = [
];
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
          thue:'',
          gia_xuatbuon:'',
          gia_xuatle:'',
          loai_sp: "",
          don_vi: '',
          catList: [],
        }
      }
      onUpdateData= (data) =>{
        this.props.onUpdateData(data);
      }
      addCustomer(obj){
        axios({
        method: 'post',
        url: `${url}/products/add`,
        data: obj,
        headers: {
          'content-type': 'application/json',
        }
        }).then(()=>{
          axios({
            method: 'get',
            url: `${url}/products/list`
          }).then(respone => {
            this.onUpdateData(respone.data);
          }).catch(error => {
            console.log(error);
          });
        }).catch(error => {
          alert("Không thể thêm mới sản phẩm")
          console.log(error);
        });
      }
      componentDidMount(){
        axios({
          method: 'get',
          url: `${url}/category/list`,
          }).then((respone)=>{
            this.setState({
              catList: respone.data
            },() =>{
              console.log(this.state)
            })
          }).catch(error => {
            console.log(error);
          });
      }
      pushCat = (catList, optionCat) => {
        if (catList.length !== 0 && optionCat.length === 0) {
          for (var i = 0; i < catList.length; i++) {
            var value = catList[i].name;
            var label = catList[i].name ;
            optionCat.push({ value: value, label: label })
          }
        }
      }
      handleChangeCat = selectedCat => {
        this.setState({
          loai_sp: selectedCat.value
        });
      };
      // getCatList(){
      //   axios({
      //     method: 'get',
      //     url: `${url}/category/list`,
      //     }).then((respone)=>{
      //       this.setState({
      //         catList: respone.data
      //       },() =>{
      //         console.log(this.state)
      //       })
      //     }).catch(error => {
      //       console.log(error);
      //     });
      // }
      onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
          [name] :value
        },() => {
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
          alert("Tên sản phẩm không được để trống!")
        }else if(!data.wholesalePrice || !data.retailPrice){
          alert("Giá bán hàng hóa không được để trống!")
        }else{
          this.addCustomer(data);     
          this.props.onClick(); 
        }
      }
    render(){
      const {catList} = this.state;
      const selectedCat = undefined;
      this.pushCat(catList,optionCat)
      return(
        <Row>
          <Prompt when={!!this.state.name} message="Bạn có chắc chắn muốn dừng lại?"/>
          <Col xs={12}>
          <Form >
            <h4>Thông tin cơ bản ("<span style={{color: "red"}}>*</span>" Bắt buộc) </h4>
            <Row>
              <Col xs={8} className="add-col">
                <Container className="add-form">
                    <Form.Row className="add-form-row">
                      <Form.Group as={Col} controlId="formGridName">
                      <Form.Label>Tên sản phẩm <span style={{color: "red"}}>*</span></Form.Label>
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
              <h5 className="add-product-h6">Giá sản phẩm <span style={{color: "red"}}>*</span></h5>
                    <Form.Row className="add-form-row">
                      <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label>Giá bán lẻ <span style={{color: "red"}}>*</span></Form.Label>
                              <Form.Control type="number" name="gia_xuatle" value={this.state.gia_xuatle} placeholder="Nhập giá bán lẻ" onChange={this.onChange} />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridPhone">
                          <Form.Label>Giá bán buôn <span style={{color: "red"}}>*</span></Form.Label>
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
              <h5 className="add-product-h6">Phân loại sản phẩm</h5>
                <Form.Row className="add-form-row" >
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Loại sản phẩm</Form.Label>
                    <Select
                        value={selectedCat}
                        onChange={this.handleChangeCat}
                        options={optionCat}
                        placeholder="Nhập tên sản phẩm..."
                      />
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
          <Link to="/customers"> 
          <Button variant="primary" type="submit" className="float-right" onClick={this.onSubmit}> 
            Lưu thông tin
          </Button>
            </Link>
        </Form>
        </Col>                
        </Row>
      );
    }
}

export default CustomerAddForm;