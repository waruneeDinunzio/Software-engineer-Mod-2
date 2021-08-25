import React, { Component } from 'react';

class Receipt extends Component {
    render() {
        return (
            
            <div className="eachReceip">
               <h1>{this.props.receipt.person}</h1>
               <h2><span>Main: </span>{this.props.receipt.order.main}</h2>
               <h2><span>Protein: </span> {this.props.receipt.order.protein}</h2>
               <h2><span>Rice: </span> {this.props.receipt.order.rice}</h2>
               <h2><span>Sauce: </span>{this.props.receipt.order.sauce}</h2>
               <h2><span>Drink: </span>{this.props.receipt.order.drink}</h2>
               <h2><span>Cost: </span>{this.props.receipt.order.cost}</h2>
            </div>
            
        );
    }
}

export default Receipt;