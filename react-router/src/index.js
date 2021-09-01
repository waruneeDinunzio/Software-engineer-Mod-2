import React from 'react';
import ReactDOM from 'react-dom';
// BrowserRouter has HTML5 history API with methods to keep out app in sync With the URL
// Developers use "as" to declare an ALIAS for BrowserRouter - why? because who wants to out the whole thing? :P
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  //React.StrictMode is there to look for potential errors
  // we want to wrap our whole application inside Router so that it will render the components we want based on the URL
  <React.StrictMode>
    <Router>
      <App />
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
