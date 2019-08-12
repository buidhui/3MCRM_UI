import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class CustomerListItem extends Component{
    render(){   
        var{order} = this.props;
        var moment = require('moment');
        return(
            <tr > 
                <td ><Link className="list-item" to={"/orders/" + order.id} >{order.id}</Link> </td>
                <td className="text-center"><Link className="list-item" to={"/orders/" + order.id} >{(order.dateOrder) ? moment(order.dateOrder).format('DD/MM/YYYY') : "Đang cập nhật"} </Link></td>
                <td className="text-center" ><Link className="list-item" to={"/orders/" + order.id} >{order.customerOrder && (order.customerOrder.name) ? order.customerOrder.name : "Đang cập nhật"}</Link> </td>
                <td className="text-center" ><Link className="list-item" to={"/orders/" + order.id} >{(order.totalMoney ) ? order.totalMoney + " VNĐ": "Đang cập nhật"}</Link></td>
                <td className="text-center" ><Link className="list-item" to={"/orders/" + order.id} >{(order.dateShip) ?  moment(order.dateShip).format('DD/MM/YYYY') : "Đang cập nhật"}</Link> </td>
                <td className="text-center" ><Link className="list-item" to={"/orders/" + order.id} >{(order.state) ? "Hoàn thành" : "Đang thực hiện"} </Link></td>
                {/* <td className="text-center" >
                    <Status />
                </td> */}
            </tr>          
        );
    }
}

export default CustomerListItem;