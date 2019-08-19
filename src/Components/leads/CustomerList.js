import axios from "axios";
import React, { Component } from "react";
import CustomerListItem from "./CustomerListItem";
//import DropDownCus from './DropDownCus';
//import PopupForm from './PopupFormCus';
import { Table, Form} from "react-bootstrap";
import url from "../url";
class CustomerList extends Component {
  state = {
    customerList: [],
    filterStatus: 2,
    
  };
  onUpdateData = data => {
    this.setState({
      customerList: data
    });
  };
  componentDidMount() {
    axios({
      method: "get",
      url: `${url}/lead/list`
    })
      .then(respone => {
        this.setState({
          customerList: respone.data
        },()=>{
          console.log(this.state)
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  onChange = event => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if(name === "filterStatus"){
      value = parseInt(target.value,10)
    }
    this.setState(
      {
        [name]: value
      },()=>{
        console.log(this.state)
      });
  };

  render() {
    var customerList = this.state.customerList;
    const {filterStatus} = this.state;
    customerList = customerList.filter((customer) =>{
      if(filterStatus === 2){
        return customer;
      }else {return customer.opportunity === (filterStatus === 1 ? 1 : 0) }
    })
    const eleCustomer = customerList.map((customer, index) => {
      return (
        <CustomerListItem
          key={customer.id}
          index={index}
          customer={customer}
          onUpdateData={this.onUpdateData}
        />
      );
    });
    return (
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="row">
          </div>
          <Table responsive hover>
            <thead>
              <tr>
                <th>Tên khách hàng</th>
                {/* <th >Địa chỉ</th>
							<th className="text-center">Ngày sinh</th> */}
                <th className="text-center">Email</th>
                <th className="text-center">Điện thoại</th>
                <th className="text-center">Nguồn thu thập</th>
                <th className="text-center">Quan tâm</th>
                <th className="text-center">
                  <Form.Control as="select" name="filterStatus" value={this.state.filterStatus} onChange={this.onChange}>
                    <option value={2}>Trạng thái</option>
                    <option value={1}>Tiềm năng</option>
                    <option value={0}>Đầu mối</option>
                  </Form.Control>
                  </th>
                <th className="text-center"></th>
              </tr>
            </thead>
            <tbody>{eleCustomer}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}
export default CustomerList;
