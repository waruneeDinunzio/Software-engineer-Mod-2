import React, { Component } from 'react';

class ShoppingCart extends Component {
    render() {
        return (
            <li>{this.props.item.name} {this.props.item.price}</li>
        );
    }
}

export default ShoppingCart;