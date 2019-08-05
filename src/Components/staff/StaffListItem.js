import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class StaffListItem extends Component{
    render(){
        var{staff} = this.props;
        var moment = require('moment');
        return(
            <tr>
                <td><Link  to={'staffs/' + staff.id}>{staff.name} </Link> </td>
                <td><Link  to={'staffs/' + staff.id}>{(staff.role) ? staff.role : "Đang cập nhật"} </Link> </td>
                <td className="text-center"><Link  to={'staffs/' + staff.id}>{(staff.dob ? moment(staff.dob).format('DD/MM/YYYY') : "Đang cập nhật")} </Link> </td>
                <td><Link  to={'staffs/' + staff.id}>{staff.email} </Link> </td>
                <td className="text-center"><Link  to={'staffs/' + staff.id}>{staff.phoneNumber} </Link> </td>
                <td className="text-center"><Link  to={'staffs/' + staff.id}>{staff.gender === 1 ? "Nam" : "Nữ"} </Link> </td>
            </tr>             
        );
    }
}

export default StaffListItem;