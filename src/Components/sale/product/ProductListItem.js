import React,{Component} from 'react';

//import PopupFormUpdateProduct from './PopupFormUpdateProduct';
class CustomerListItem extends Component{
    render(){   
        var{customer} = this.props;
        return(
            <tr> 
                <td >{customer.id} </td>
                <td style={{width:'25%'}} >{(customer.name) ? customer.name : "Đang cập nhật"} </td>
                <td className="text-center" >{(customer.catName) ? customer.catName : "Đang cập nhật"} </td>
                <td className="text-center" >{(customer.brand ) ? customer.brand : "Đang cập nhật"}</td>
                <td className="text-center" >{(customer.origin) ? customer.origin : "Đang cập nhật"} </td>
                <td className="text-center" >{(customer.soldQuantity) ? customer.soldQuantity : 0} </td>
                <td className="text-center" >{(customer.quantity) ? customer.quantity: 0}  </td>
                {/* <td className="text-center" ><PopupFormUpdateProduct product={this.props.customer} onUpdateData={this.props.onUpdateData}/>
               </td> */}
                
            </tr>          
        );
    }
}

export default CustomerListItem;