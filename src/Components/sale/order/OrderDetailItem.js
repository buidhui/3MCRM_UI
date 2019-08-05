import React,{Component} from 'react';

class OrderItem extends Component{
    render(){   
        var{orderItem} = this.props;
        return(
            <tr > 
                <td >{orderItem.ctHangHoa && orderItem.ctHangHoa.id} </td>
                <td >{orderItem.ctHangHoa && orderItem.ctHangHoa.ten}</td>
                <td className="text-center" >{ orderItem.ctHangHoa && orderItem.ctHangHoa.don_vi}</td>
                <td className="text-center" >{orderItem.donGia}</td>
                <td className="text-center" >{orderItem.soLuong}</td>
                <td className="text-center" >{orderItem.thanhTien}</td>
            </tr>          
        );
    }
}

export default OrderItem;