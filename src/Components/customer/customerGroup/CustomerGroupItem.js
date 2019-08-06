import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class CustomerListItem extends Component{
    render(){
        var{group} = this.props;
        return(
            <tr> 
                <td style={{width:'10%'}} > <Link  to={'/groupcustomers/' + group.id}>{group.id}</Link> </td>
                <td style={{width:'30%'}}><Link  to={'/groupcustomers/' + group.id }>{group.name}</Link> </td>
                <td style={{width:'50%'}} ><Link  to={'/groupcustomers/'+ group.id }>{group.note}</Link> </td>
                <td style={{width:'10%'}} className="text-center"><Link  to={'/groupcustomers/' + group.id}>{group.updateDate}</Link> </td>
            </tr>          
        );
    }
}

export default CustomerListItem;