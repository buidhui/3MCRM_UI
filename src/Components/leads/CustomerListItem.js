import React,{Component} from 'react';
import LeadPopup from './LeadPopup'

class CustomerListItem extends Component{
    pushInterest = (interestList) => {
        var interest =[];
            if (interestList.length !== 0 ) {
              for (var i = 0; i < interestList.length; i++) {
                var value = interestList[i].name;
                interest.push(value);
              }
            }
        return interest;
          
    }
    render(){
        var{customer} = this.props;
        return(
            <tr> 
                <td  style={{width: "12%"}}>{customer.name}</td>
                <td  style={{width: "10%"}} className="text-center" >{(customer.email) ? customer.email : "Đang cập nhật"}</td>
                <td  style={{width: "12%"}} className="text-center  " >{(customer.phone) ? customer.phone : "Đang cập nhật"} </td>
                <td  className="text-center  " >{customer.source && customer.source.name} </td>
                <td  className="text-center  " >{customer && this.pushInterest(customer.interest).toString()} </td>
                <td  style={{width: "13%"}} className="text-center  " >{(customer.opportunity === 0) ? "Đầu mối" : "Tiềm năng" }</td>
                <td  className="text-center  " > <LeadPopup customer={this.props.customer} onUpdateData={this.props.onUpdateData}/> </td>
                
            </tr>          
        );
    }
}

export default CustomerListItem;