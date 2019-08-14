import axios from 'axios';
import React, {Component} from 'react'
import CustomerListItem from './OrderListItem';
import DropDownCus from './DropDownOrder';
// import PopupForm from './PopupFormOrder';
import {Table} from 'react-bootstrap';
import url from '../../url'
class CustomerList extends Component{
    state ={
		orderList : [],
		filter:{
			filterName: '',
		}		
	}
	onUpdateData = (data) =>{
        this.setState({
			orderList: data
		})
    }
    componentDidMount(){
		axios({
			method: 'get',
			url: `${url}/orders/list`
		}).then(respone => {
			this.setState({
				orderList: respone.data,
			});
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
		var {orderList} = this.state;
		const {filter} = this.state;
		if(filter && orderList.length !== 0){		
				orderList = orderList.filter((order) =>{
					return order.id.toString().toLowerCase().indexOf(filter.filterName) !== -1;					
				});													
		}
		const eleCustomer = orderList.map((order,index) =>{			
			return <CustomerListItem  key={order.id} index={index} order={order} onUpdateData={this.onUpdateData}></CustomerListItem>;		
		});
        return(
			<div className="row mt-15">
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<div className="row">
						<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							<DropDownCus onFilter ={this.onFilter }/>
						</div>
						{/* <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							<PopupForm open={this.props.open} onUpdateData={this.onUpdateData} />
						</div> */}
					</div>												
					<Table responsive  hover>
						<thead>
							<tr>
							<th >Mã đơn hàng</th>
							<th className="text-center">Ngày tạo đơn</th>
							<th className="text-center">Tên khách hàng</th>
							<th className="text-center">Khách phải trả</th>
							<th className="text-center">Ngày hẹn giao</th>
							<th className="text-center">Trạng thái</th>
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