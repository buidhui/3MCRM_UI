import React, {Component} from 'react';
import {InputGroup,FormControl,Row,Col} from 'react-bootstrap';
class DropDownCus extends Component{
    constructor(props){
        super(props);
        this.state = {
            filterName: '',
            filterEmail: '',
        }
    }
    onChange =(event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter ( 
            name === 'filterName' ? value : this.filterName,
            name === 'filterEmail' ? value : this.filterEmail,
        );
        this.setState({
            [name] : value,
        });

    }
    render(){
        var {filterName,filterEmail} = this.state;
        return(
        <InputGroup className="mb-3">
            <Row>
                <Col >
                    <FormControl style={{width: "100%"}} name="filterName" value={filterName} onChange={this.onChange} placeholder="Nhập mã sản phẩm... "/>
                </Col>
                <Col>
                    <FormControl style={{width: "100%"}} name="filterEmail" value={filterEmail} onChange={this.onChange} placeholder="Nhập tên sản phẩm..."/>
                </Col >  
            </Row>                                     
        </InputGroup>
        );
    }
}

export default DropDownCus;