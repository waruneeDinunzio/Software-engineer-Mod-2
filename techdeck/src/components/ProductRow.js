import React, { Component } from 'react';
import ProductItem from './ProductItem';
class ProductRow extends Component {
    render() {
        return (
            <div>
                This is product row
                <ProductItem />
            </div>
        );
    }
}

export default ProductRow;