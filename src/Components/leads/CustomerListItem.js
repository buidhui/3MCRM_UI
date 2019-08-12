import React,{Component} from 'react';
import LeadPopup from './LeadPopup'
class CustomerListItem extends Component{
    render(){
        var{customer} = this.props;
        return(
            <tr> 
                <td style={{width:"25%"}} >{customer.name}</td>
                <td style={{width:"20%"}} className="text-center" >{(customer.email) ? customer.email : "Đang cập nhật"}</td>
                <td style={{width:"15%"}} className="text-center  " >{(customer.phone) ? customer.phone : "Đang cập nhật"} </td>
                <td style={{width:"20%"}} className="text-center  " >{(customer.opportunity === 0) ? "Khách hàng đầu mối" : "Khách hàng tiềm năng" }</td>
                <td style={{width:"20%"}} className="text-center  " > <LeadPopup customer={this.props.customer} onUpdateData={this.props.onUpdateData}/> </td>
                
            </tr>          
        );
    }
}

export default CustomerListItem;