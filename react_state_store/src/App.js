// * Before we were importing React by import React from 'react'
// * Line 3 is a way for us to import one specific part of React
// * destructing
import React, { Component } from 'react';
import products from './data.js'

console.table(products)

// * we are going to create our class component
// * the shortcut for the class component boilerplate using react code snippets is rcc


// * we can export default on the same line where we create our component
// * Before we would have to do React.Component

// * subclass
export default class App extends Component {
  // we need to initialize our state before our render method

  // * ===== old syntax ======
  // * props is data or properties being passed down from a parent component
  // constructor(props) {
  //   // * super() refers to the parent component (superclass)
  //   super(props)
  //   // * this.state is the object that comes with React Component that we can store data inside
  //   // * we write our state just like any objects in JS
  //   this.state = {
  //     // * key value pairs just like any object, left side is the property name and the right side is the value
  //     // * the right side refers to the products array list that we imported
  //     products: products
  //   }
  // }
  
  // * ==== new syntax ====
  // ! HIGHLY RECOMMEND
  //* we no longer need to initiate our state object with "this"
  state = {
    products: products
  }


  render() {
    // console.log(this.state.products)
    return (
      <div>
        <h1>Big Time Shopping!</h1>
        <ul>
          {/* map over our products list that we imported */}
          {
            // map is just another iterator just like any for loops
            // what makes special is that it lets us return JSX
            // add item parameter inside our arrow function
            // each item represents each element in our products array

            // whether or not we choose to write new syntax or old syntax, we always have to REFER to our state object with the "this" keyword
            
            // * we know that products is an array of items
            // * best practices for naming convention is to refer to a single object with the singular name of the array
            this.state.products.map((product) => {
              return (
                <li> {product.name} {product.price} </li>
              )
            })

          }

          {/* we can call on just one item if we wanted to */}
          {/* {this.state.products[0].name} */}
        </ul>
      </div>
    );
  }
}

// console.log("we are outside of our component", products)
// console.log("we are outside trying to access our state", this.state.products)