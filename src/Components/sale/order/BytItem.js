import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
class BuyItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            discount: 0
        }
    }
    onDeleteProduct = () => {
        this.props.onDeleteProduct(this.props.buyItem.productOrder.id);
    }
    onChangeQuantity = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === "quantity" ){
            value = (value < 0) ? 1 : value
        }
        if(name === "discount"){
            value = (value < 0) ? 0 : value
        }
        this.setState({
            [name]: value,
        }, () => {
            console.log(this.state)
            this.props.onUpdateQuantity(this.props.buyItem.productOrder.id, this.state.quantity, this.state.discount, this.state.quantity * this.props.buyItem.productOrder.retailPrice);
        });

    }
    showTotal = (quantity, dongia, discount) => {
        if (quantity !== 0 && dongia !== 0) {
            if (discount !== 0) {
                return (quantity * dongia * (100 - discount)) / 100
            } else return quantity * dongia;
        }
    }
    render() {
        var { buyItem } = this.props;
        return (
            <tr >
                <td >{buyItem && buyItem.productOrder.id} </td>
                <td >{buyItem && buyItem.productOrder.name}</td>
                <td className="text-center" >{buyItem && buyItem.productOrder.unit}</td>
                <td className="text-center" >{buyItem && buyItem.productOrder.retailPrice}</td>
                <td className="text-center" >
                    <Form.Control
                        type="number"
                        min="1"
                        max={buyItem && buyItem.productOrder.quantity}
                        name="quantity"
                        value={this.state.quantity}
                        onChange={this.onChangeQuantity}
                        style={{ padding: '3px', marginLeft: "7px", width: '55px', height: "calc(0.75em + 0.5rem + 2px)" }} />
                </td>
                <td className="text-center" >
                    <Form.Control
                        type="number"
                        name="discount"
                        min="0"
                        value={this.state.discount}
                        onChange={this.onChangeQuantity}
                        style={{ padding: '3px', marginLeft: "7px", width: '55px', height: "calc(0.75em + 0.5rem + 2px)" }} />
                </td>
                <td className="text-center" >{this.showTotal(this.state.quantity, buyItem.productOrder.retailPrice, this.state.discount)}</td>
                <td className="text-center" >
                    <button
                        type="button"
                        className="btn btn-link"
                        onClick={this.onDeleteProduct}
                        style={{ margin: '0px', padding: '3px', textTransform: "none" }}
                    ><i className="fas fa-trash-alt"></i></button></td>
            </tr>
        );
    }
}

export default BuyItem;