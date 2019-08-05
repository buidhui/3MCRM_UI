import React,{Component} from 'react';

import PopupFormUpdateProduct from './PopupFormUpdateProduct';
class CustomerListItem extends Component{
    render(){   
        var{customer} = this.props;
        return(
            <tr sida={this.props.sida}> 
                <td >{customer.id} </td>
                <td style={{width:'25%'}} >{(customer.ten) ? customer.ten : "Đang cập nhật"} </td>
                <td className="text-center" >{(customer.catName) ? customer.catName : "Đang cập nhật"} </td>
                <td className="text-center" >{(customer.hang_sx ) ? customer.hang_sx : "Đang cập nhật"}</td>
                <td className="text-center" >{(customer.xuat_su) ? customer.xuat_su : "Đang cập nhật"} </td>
                <td className="text-center" >{(customer.soluong_daban) ? customer.soluong_daban : 0} </td>
                <td className="text-center" >{(customer.so_luong) ? customer.so_luong: 0}  </td>
                <td className="text-center" ><PopupFormUpdateProduct product={this.props.customer} onUpdateData={this.props.onUpdateData}/>
               </td>
                
            </tr>          
        );
    }
}

export default CustomerListItem;