import React, { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
class DropDownCus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.props.onFilter(
            name === 'filterName' ? value : this.filterName,
        )
        this.setState({
            [name]: value,
        });

    }
    render() {
        var { filterName } = this.state;
        return (
            <InputGroup className="mb-3">

                <FormControl style={{ width: "100%" }} name="filterName" value={filterName} onChange={this.onChange} placeholder="Nhập tên, email hoặc số điện thoại nhân viên... " />

            </InputGroup>
        );
    }
}

export default DropDownCus;