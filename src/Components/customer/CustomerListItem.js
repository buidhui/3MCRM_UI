import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class CustomerListItem extends Component{
    render(){
        var{customer} = this.props;
        var moment = require('moment');
        return(
            <tr> 
                <td ><Link  to={'customers/' + customer.id}>{customer.name}</Link> </td>
                <td ><Link  to={'customers/' + customer.id}>{(customer.address) ? customer.address : "Đang cập nhật"}</Link> </td>
                <td className="text-center" ><Link  to={'customers/' + customer.id}>{(customer.dob) ? moment(customer.dob).format('DD/MM/YYYY') : "Đang cập nhật"}</Link> </td>
                <td className="text-center" ><Link  to={'customers/' + customer.id}>{customer.email}</Link> </td>
                <td className="text-center" ><Link  to={'customers/' + customer.id}>{customer.phone}</Link> </td>
                <td className="text-center" ><Link  to={'customers/' + customer.id}>{customer.gender === 1 ? "Nam" : "Nữ"}</Link>  </td>
                {/* <td>{customer.customerName}</td>
                <td>{customer.customerAddress}</td>
                <td className="text-center">{customer.DOB}</td>
                <td className="text-center">{customer.email} </td>
                <td className="text-center">{customer.phoneNumber}</td>
                <td className="text-center">{customer.gender === true ? "Nam" : "Nữ"} </td>   */}
            </tr>          
        );
    }
}

export default CustomerListItem;