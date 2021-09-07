import React, { useState } from 'react'

// ES6 - function expression
const App = () => {
  // Since we don't have access to a state object anymore, we will need t use a React Hook. useState Hook is what we will be using if we wanted to work with a state.
  // Documentation: https://reactjs.org/docs/hooks-reference.html#usestate
  // The way we create state in functional components:
  // you can name your state anything you want
  // GOAL : create counter using useState hook
  // first argument will be the name of our state
  // second argument wll the the function that is LINKED to this specific state
  // inside useState we can pass on an initial value
  // const [state, setState] = useState(initialState);
  const [count, setCount] = useState(0)
  //const [food, setFood] = useState("french fries")

  // // in class components
  // state = {
  //   // key/value pairs
  //   count: 0
  //   food: "french fries"
  // }

  // // setCount is analagous to:
  // this.setState({ count: })

  return (
    <div>
      <h1>Intro to React Functional Components</h1>
      <div>
      {/* In class components, we used to use "this" to access our state variable. 
      Now functional components lets us treat our component like a regular function. "this" points to the parent object. We are no longer working with an object component we are now using a function component*/}
        {count}
      </div>
      <button onClick={()=> setCount(count + 1)}>Add</button>
      <button onClick={()=> setCount(count - 1)}>Subtract</button>
    </div>
  );
};

export default App;

// function declaration looks like this:
/* function App() {

}
*/