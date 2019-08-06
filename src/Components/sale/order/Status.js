import React,{Component} from 'react';
class Status extends Component{
    onChangeStatus = (status) =>{
        if(status === 1){
            this.props.changeStatus(0)
        }else{
            this.props.changeStatus(1)
        }
       
    }
    render(){
        console.log(this.props)
        return(
            <div style={{marginTop: '9px'}} className="custom-control custom-switch float-right">
            <input type="checkbox" className="custom-control-input" id="customSwitch2" defaultChecked={this.props.orderDetail && this.props.orderDetail.state} disabled={this.props.orderDetail && this.props.orderDetail.state} onClick={() => this.onChangeStatus(this.props.orderDetail.state)}></input>
            <label className="custom-control-label" htmlFor="customSwitch2"></label>
            </div>
        );
    }
}

export default Status;