import React, {Component} from 'react';
import ProductItem from '../components/ProductItem';
import './Product.css';

class Product extends Component {

    state = {
        products: [],
        didLoad: false,
    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res => res.json())
            .then(products => {
                this.setState({
                    products: products,
                    didLoad: true
                })
            });
    }

    render() {
        if (this.state.didLoad) {
            return(
                <div className="products">
                    {this.state.products.map((product, i) => {
                        return(
                            <ProductItem key={i} name={product.title} desc={product.description} price={product.price} image={product.image}/>
                        )
                    })}
                </div>
            )
        } else {
            // 
            return(
                <div>Loading Products...</div>
            )
        }
       
    }
}

export default Product;