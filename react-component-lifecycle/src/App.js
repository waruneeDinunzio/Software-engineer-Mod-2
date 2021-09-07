import React, { Component } from 'react';
import Child from './Child.js'
/*
  ==============================
       COMPONENTS LIFECYCLE
  ==============================

  ===== OBJECTIVES =====
  1.) The life cycle of components
  2.) how to use and when to use

  Documentation: https://reactjs.org/docs/react-component.html

  ===== What is a component's lifecycle? =====
    • Components have three life stages:
      1.) Mounting - 
      2.) Updating - 
      3.) Unmounting - 

  ===== What should we care about the lifecycle? =====
    • 
    • 

  ===== Lifecycle Methods =====
    • In this lesson, we will only learn three life cycle methods. 
    • The other methods you may see online are deprecated or are rarely used.

    Methods:
    1.) componentWillMount()
    2.) componentDidMount()
    3.) componentWillReceiveProps()
    4.) shouldComponentUpdate()
    5.) componentWillUpdate()
    6.) componnentDidUpdate()
    7.) componentWillUnmount()

    • 

    • 
    
    Deprecated Methods:
    1.) componentWillMount()
    2.) componentWillReceiveProps()
    3.) componentWillUpdate()
  
    ===== Three methods we will learn today =====
    1.) componentDidMount()
    2.) componentDidUpdate()
    3.) componentWillUnmount()

    • You will predominantly just be using componentDidMount() in most cases.
*/

class App extends Component {
  state = {
    total: 0,
    childIsMounted: true
  }
  // Mount = rendered
  // invoked immediately after a component is mounted. If you need to load data from a remote endpoint, this is  good place to instantiate the network request. (AJAX calls)
  // You want to try and put your componentDidMount() just right after your state object/constructor for organizational purposes.
  componentDidMount() {
      console.log("component did mounted") 
  }
  componentDidUpdate() {
    console.log("component did update")
  }
  add = () => {
    this.setState({
      total: this.state.total + 1
    })
  }
  render() {
    return (
      <div>
        <h1>Component Lifecycle</h1>
        <div>
          <p>
            {this.state.total} <br />
            <button onClick= {this.add} >Add</button>
          </p>
          <div>{ 
            this.state.childIsMounted ? <Child /> : null
          }
          <div>
            <button onClick={()=> this.setState({childIsMounted: false})}>Remove Child</button>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;