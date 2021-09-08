import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Home from './Home'
import About from './About'
import Contact from './Contact';
import Giphy from './Giphy';
import '../App.css'
const App = () => {
  return (
    <div id="app">
      <NavBar />

      <Switch>
          {/* Route is a child */}
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/giphy">
              <Giphy />
            </Route>
          </Switch>
        <Footer />
    </div>
  );
};

export default App;