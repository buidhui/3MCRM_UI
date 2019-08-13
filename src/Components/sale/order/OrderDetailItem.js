import React,{Component} from 'react';

class OrderItem extends Component{
    render(){   
        var{orderItem} = this.props;
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
                <td >{orderItem.productOrder && orderItem.productOrder.id} </td>
                <td >{orderItem.productOrder && orderItem.productOrder.name}</td>
                <td className="text-center" >{ orderItem.productOrder && orderItem.productOrder.unit}</td>
                <td className="text-center" >{formatMoney(orderItem.unitPrice)}</td>
                <td className="text-center" >{orderItem.quantity}</td>
                <td className="text-center" >{formatMoney(orderItem.finalPrice)}</td>
            </tr>          
        );
    }
}

export default OrderItem;