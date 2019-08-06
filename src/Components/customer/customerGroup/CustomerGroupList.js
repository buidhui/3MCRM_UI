import axios from 'axios';
import React, {Component} from 'react'
import CustomerGroupItem from './CustomerGroupItem';
import FilterGroup from './FilterGroup';
import url from '../../url'
import {Table} from 'react-bootstrap';
class CustomerList extends Component{
    state ={
		customerGroupList : [],
		filter:{
			filterName: '',

		}		
	}
    componentDidMount(){
		axios({
			method: 'get',
			url: `${url}/customer-group/list`
		}).then(respone => {
			this.setState({
				customerGroupList: respone.data,
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
		var customerGroupList = this.state.customerGroupList;
		const {filter} = this.state;		
		if(filter){			
			customerGroupList = customerGroupList.filter((group) =>{
				return group.name.toLowerCase().indexOf(filter.filterName) !== -1});													
		}else{
			return customerGroupList;
		}
		const eleGroup = customerGroupList.map((group,index) =>{			
			return <CustomerGroupItem  key={group.id} index={index} group={group} ></CustomerGroupItem>;		
		});
        return(
			<div className="row mt-15">
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<div className="row">
						<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							<FilterGroup onFilter ={this.onFilter }/>
						</div>
					</div>												
					<Table responsive  hover>
						<thead>
							<tr>
							<th >Mã nhóm</th>
							<th >Tên nhóm</th>
							<th >Mô tả</th>
							<th className="text-center">Ngày cập nhật</th>
							</tr>
						</thead>
						<tbody> 
						  {eleGroup}   
						</tbody>
					</Table>
				</div>	
			</div>
	
            )          
    }    
}
export default CustomerList;