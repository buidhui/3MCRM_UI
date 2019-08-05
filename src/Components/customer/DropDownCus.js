import React, {Component} from 'react';
import {InputGroup,FormControl,Row,Col} from 'react-bootstrap';
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
            <Row>
                <Col  lg={4}>
                    <FormControl style={{width: "100%", marginBottom: "15px"}} name="filterName" value={filterName} onChange={this.onChange} placeholder="Nhập tên khách hàng... "/>
                </Col>
                <Col >
                    <FormControl style={{width: "100%", marginBottom: "15px"}} name="filterEmail" value={filterEmail} onChange={this.onChange} placeholder="Nhập email khách hàng..."/>
                </Col>
                <Col >
                    <FormControl style={{width: "100%", marginBottom: "15px"}} lg={4} name="filterPhone" value={filterPhone} onChange={this.onChange} placeholder="Nhập số điện thoại..."/>
                </Col>    
            </Row>                                      
        </InputGroup>
        );
    }
}

export default DropDownCus;