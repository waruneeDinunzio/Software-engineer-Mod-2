import React, { Component } from 'react';
import Receipt from './Receipt';
import './App.css'
const receipt1 =
  {
    person: 'Karolin',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: [
        'Baby Bok Choy', 'Cucumber Kimchi'
      ],
      drink: 'Korchata',
      cost: 22
    },
    paid: false
  }
const receipt2 = {
  person: 'Jerrica',
  order: {
    main: 'Rice Bowl',
    protein: 'Ginger Soy Chix',
    rice: 'Sticky Rice',
    sauce: 'Korilla',
    toppings: [
      'Yuzu Pickled Sweet Pepper', 'Kale'
    ],
    drink: 'Korchata',
    cost: 19
  },
  paid: false
}
const receipt3 = {
  person: 'Matt',
  order: {
    main: 'Salad Bowl',
    protein: 'Organic Tofu',
    rice: 'none',
    sauce: "K'lla",
    toppings: [
      'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
    ],
    drink: 'Sparkling Blood Orange Soda',
    cost: 20
  },
  paid: true
}
class App extends Component {
  // * initialize our state
  state = {
    receipt1: receipt1,
    receipt2: receipt2,
    receipt3: receipt3
  }

  render() {
    return (
      
      <div className="receipt">
      <Receipt receipt={this.state.receipt1} />
      <Receipt receipt={this.state.receipt2} />
      <Receipt receipt={this.state.receipt3} />
        
      </div>
    );
  }
}

export default App;