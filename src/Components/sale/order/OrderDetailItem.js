import React,{Component} from 'react';

class OrderItem extends Component{
    render(){   
        var{orderItem} = this.props;
        return(
            <tr > 
                <td >{orderItem.productOrder && orderItem.productOrder.id} </td>
                <td >{orderItem.productOrder && orderItem.productOrder.name}</td>
                <td className="text-center" >{ orderItem.productOrder && orderItem.productOrder.unit}</td>
                <td className="text-center" >{orderItem.unitPrice}</td>
                <td className="text-center" >{orderItem.quantity}</td>
                <td className="text-center" >{orderItem.finalPrice}</td>
            </tr>          
        );
    }
}

export default OrderItem;