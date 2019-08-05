import React, {Component} from 'react';
import {InputGroup,FormControl} from 'react-bootstrap';
class DropDownCus extends Component{
    constructor(props){
        super(props);
        this.state = {
            filterName: '',
            filterEmail: '',
            filterPhone: ''
        }
    }
    onChange =(event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter ( 
            name === 'filterName' ? value : this.filterName,
            name === 'filterEmail' ? value : this.filterEmail,
            name === 'filterPhone' ? value : this.filterPhone );
        this.setState({
            [name] : value,
        });

    }
    render(){
        var {filterName,filterEmail,filterPhone} = this.state;
        return(
        <InputGroup className="mb-3">
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <FormControl name="filterName" value={filterName} onChange={this.onChange} placeholder="Nhập tên nhân viên... "/>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <FormControl name="filterEmail" value={filterEmail} onChange={this.onChange} placeholder="Nhập email nhân viên..."/>
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <FormControl name="filterPhone" value={filterPhone} onChange={this.onChange} placeholder="Nhập số điện thoại..."/>
                </div>    
            </div>                                      
        </InputGroup>
        );
    }
}

export default DropDownCus;