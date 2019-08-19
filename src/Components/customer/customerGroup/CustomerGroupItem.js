import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class CustomerListItem extends Component{
    render(){
        var{group} = this.props;
        var moment = require('moment');
        return(
            <tr> 
                <td style={{width:'10%'}} > <Link className="list-item" to={'/groupcustomers/' + group.id}>{group.id}</Link> </td>
                <td style={{width:'25%'}}><Link className="list-item" to={'/groupcustomers/' + group.id }>{group.name}</Link> </td>
                <td style={{width:'40%'}} ><Link className="list-item" to={'/groupcustomers/'+ group.id }>{group.note}</Link> </td>
                <td style={{width:'10%'}} ><Link className="list-item" to={'/groupcustomers/'+ group.id }>{group.quantity}</Link> </td>
                <td style={{width:'15%'}} className="text-center"><Link className="list-item" to={'/groupcustomers/' + group.id}>{(group.updateDate) ? moment(group.updateDate).format('DD/MM/YYYY') : "Đang cập nhật"}</Link> </td>
            </tr>          
        );
    }
}

export default CustomerListItem;