import React, { Component } from 'react';
import ‘./styles/ProductItem.css’
class ProductItem extends Component {
    render() {
        return(
            <div className=“main-container”>
                    <img className=“product-img” src={this.props.image}/>
                <div className=“product-info”>
                    <p>{this.props.description}</p>
                    <span>{this.props.name}</span>
                    <span>Price: {this.props.price}</span>
                </div>
            </div>
        )
    }
}
export default ProductItem;