import axios from 'axios';
import React, {Component} from 'react'
import CustomerListItem from './ProductListItem';
import DropDownCus from './DropDownProduct';
//import PopupForm from './PopupFormProduct';
import BreadCrum from "../../breadcums/BreadCrumProductList"
import {Table} from 'react-bootstrap';
import url from '../../url'
class CustomerList extends Component{
    state ={
		customerList : [],
		filter:{
			filterName: '',
			filterEmail: '',
		}		
	}
	onUpdateData = (data) =>{
        this.setState({
			customerList: data
		})
    }
    componentDidMount(){
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
		let {customerList} = this.state;
		const {filter} = this.state;
		if(filter){			
				customerList = customerList.filter((customer) =>{
				return customer.name.toLowerCase().indexOf(filter.filterName) !== -1 || customer.id.toString().toLowerCase().indexOf(filter.filterName) !== -1;					
				});													
		}else{
			return customerList;
		}
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
						{/* <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
							<PopupForm open={this.props.open} onUpdateData={this.onUpdateData}/>
						</div> */}
					</div>												
					<Table responsive  hover>
						<thead>
							<tr>
							<th >Mã sản phẩm</th>
							<th >Tên sản phẩm</th>
							<th className="text-center">Loại</th>
							<th className="text-center">Nhãn hiệu</th>
							<th className="text-center">Xuất xứ</th>
							<th className="text-center">Số lượng đã bán</th>
							<th className="text-center">Số lượng có thể bán</th>
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