import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class CustomerListItem extends Component{
    render(){   
        var{order} = this.props;
        var moment = require('moment');
        return(
            <tr > 
                <td ><Link to={"/orders/" + order.id} >{order.id}</Link> </td>
                <td className="text-center"><Link to={"/orders/" + order.id} >{(order.ngay_dathang) ? moment(order.ngay_dathang).format('DD/MM/YYYY') : "Đang cập nhật"} </Link></td>
                <td className="text-center" ><Link to={"/orders/" + order.id} >{order.customerDH && (order.customerDH.name) ? order.customerDH.name : "Đang cập nhật"}</Link> </td>
                <td className="text-center" ><Link to={"/orders/" + order.id} >{(order.tong_tien ) ? order.tong_tien + " VNĐ": "Đang cập nhật"}</Link></td>
                <td className="text-center" ><Link to={"/orders/" + order.id} >{(order.ngay_giaohang) ?  moment(order.ngay_giaohang).format('DD/MM/YYYY') : "Đang cập nhật"}</Link> </td>
                <td className="text-center" ><Link to={"/orders/" + order.id} >{(order.trangthai) ? "Hoàn thành" : "Đang thực hiện"} </Link></td>
                {/* <td className="text-center" >
                    <Status />
                </td> */}
            </tr>          
        );
    }
}

export default CustomerListItem;