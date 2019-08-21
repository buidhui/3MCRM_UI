import axios from 'axios';
import React, {Component} from 'react'
import CustomerListItem from './ProductListItem';
import DropDownCus from './DropDownProduct';
//import PopupForm from './PopupFormProduct';
import BreadCrum from "../../breadcums/BreadCrumProductList"
import {Table,Form} from 'react-bootstrap';
import url from '../../url'
class CustomerList extends Component{
    state ={
		customerList : [],
		filterType: -1,
		filter:{
			filterName: '',
			filterEmail: '',
			
		},
		catList: []		
	}
	onChange = event => {
		var target = event.target;
		var name = target.name;
		var value = target.value;
		if(name === "filterType"){
		  value = parseInt(target.value,10)
		}
		this.setState(
		  {
			[name]: value
		  },()=>{
			console.log(this.state)
		  });
	  };
	onUpdateData = (data) =>{
        this.setState({
			customerList: data
		})
    }
    componentDidMount(){
		axios({
			method: "get",
			url: `${url}/category/list`
		  })
			.then(respone => {
			  this.setState(
				{
				  catList: respone.data
				},
				() => {
				  console.log(this.state);
				}
			  );
			})
			.catch(error => {
			  console.log(error);
			});
		axios({
			method: 'get',
			url: `${url}/products/list`
		}).then(respone => {
			this.setState({
				customerList: respone.data,
			},()=>{
			})
		}).catch(error => {
			console.log(error);
		});
	}
	onFilter = (filterName1) =>{
		if(!filterName1 ){
			this.setState({
				filter:{
					filterName: '',		
				}
			},()=>{
				console.log(this.state);
			})
		}else{
			this.setState({
				filter:{
					filterName: (filterName1) ? 	filterName1.toLowerCase() : this.state.filter.filterName,	
				}					
			},()=>{
				console.log(this.state);
			})
		}
	}
	
    render(){
		let {customerList,catList} = this.state;
		const {filter,filterType} = this.state;
		if(filter){			
				customerList = customerList.filter((customer) =>{
				return customer.name.toLowerCase().indexOf(filter.filterName) !== -1 || customer.id.toString().toLowerCase().indexOf(filter.filterName) !== -1;					
				});	
		}else{
			return customerList;
		}
		customerList = customerList.filter((customer) =>{
			if(filterType === -1){
			  return customer;
			}else {return customer.categoryProduct.id === filterType }
		  })
		const eleCustomer = customerList.map((customer,index) =>{			
			return <CustomerListItem  key={customer.id} index={index} customer={customer} onUpdateData={this.onUpdateData}></CustomerListItem>;		
		});
        return(
			<div className="row mt-15">
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<div className="row" style={{marginBottom: "15px"}}>
				<BreadCrum />
				</div>
					<div className="row">
						<div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
							<DropDownCus onFilter ={this.onFilter }/>
						</div>
						<div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
							 <Form.Control as="select" name="filterType" value={this.state.filterType} onChange={this.onChange}>
									<option value={-1}>Tất cả</option>
									{catList && catList.map((cat) => {
										return <option key={cat.id} value={cat.id}>{cat.name} </option>
									})}
								</Form.Control> 
						</div> 
						
					</div>												
					<Table responsive  hover>
						<thead>
							<tr>
							<th >Mã sản phẩm</th>
							<th style={{display: "table-cell", verticalAlign: "middle"}} className="text-center">Tên sản phẩm</th>
							<th style={{display: "table-cell", verticalAlign: "middle"}} className="text-center">Loại
								
							</th>
							<th style={{display: "table-cell", verticalAlign: "middle"}} className="text-center">Nhãn hiệu</th>
							<th style={{display: "table-cell", verticalAlign: "middle"}} className="text-center">Xuất xứ</th>
							<th style={{display: "table-cell", verticalAlign: "middle"}} className="text-center">Số lượng đã bán</th>
							<th style={{display: "table-cell", verticalAlign: "middle"}} className="text-center">Số lượng có thể bán</th>
							</tr>
						</thead>
						<tbody> 
						  {eleCustomer}   
						</tbody>
					</Table>
				</div>	
			</div>
	
            )          
    }    
}
export default CustomerList;