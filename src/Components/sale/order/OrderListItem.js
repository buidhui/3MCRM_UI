import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class CustomerListItem extends Component{
    render(){   
        var{order} = this.props;
        var moment = require('moment');
        function formatMoney(
            amount,
            decimalCount = 2,
            decimal = "",
            thousands = ","
          ) {
            try {
              decimalCount = Math.abs(decimalCount);
              decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
      
              const negativeSign = amount < 0 ? "-" : "";
      
              let i = parseInt(
                (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
              ).toString();
              let j = i.length > 3 ? i.length % 3 : 0;
      
              return (
                negativeSign +
                (j ? i.substr(0, j) + thousands : "") +
                i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
                (decimalCount
                  ? decimal +
                    Math.abs(amount - i)
                      .toFixed(decimalCount)
                      .slice(4)
                  : "")
              );
            } catch (e) {
              console.log(e);
            }
          }
        return(
            <tr > 
                <td ><Link className="list-item" to={"/orders/" + order.id} >{order.id}</Link> </td>
                <td className="text-center"><Link className="list-item" to={"/orders/" + order.id} >{(order.dateOrder) ? moment(order.dateOrder).format('DD/MM/YYYY') : "Đang cập nhật"} </Link></td>
                <td className="text-center" ><Link className="list-item" to={"/orders/" + order.id} >{order.customerOrder && (order.customerOrder.name) ? order.customerOrder.name : "Đang cập nhật"}</Link> </td>
                <td className="text-center" ><Link className="list-item" to={"/orders/" + order.id} >{(order.totalMoney ) ? formatMoney(order.totalMoney) + " VNĐ": "Đang cập nhật"}</Link></td>
                <td className="text-center" ><Link className="list-item" to={"/orders/" + order.id} >{(order.dateShip) ?  moment(order.dateShip).format('DD/MM/YYYY') : "Đang cập nhật"}</Link> </td>
            </tr>          
        );
    }
}

export default CustomerListItem;