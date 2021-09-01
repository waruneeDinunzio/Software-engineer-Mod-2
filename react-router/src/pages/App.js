import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
// Componants
// relative path means you are starting from this file and going somewhere else
// ..(go back to parent folder) /components(go to components folder) /NavBar(go to NavBar file)
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Home from './Home'
import About from './About'
import Contact from './Contact';
import '../App.css'
import { S } from 'xmlchars/xml/1.0/ed5';
import { Router } from 'workbox-routing';
/* 
  =========================================
                REACT ROUTER
  =========================================

  • LEARNING OBJECTIVES •
  -----------------------
  1.) Use React Router to define client-side <Route> Components
  2.) Render "page" components using React Router
  3.) Create hyperlinks using <Link>
  4.) Access URL Parameters
  5.) Make our application feel more like a website

     • DOCUMENTATION •
  -----------------------
  Link: https://reactrouter.com/web/guides/quick-start

         • SETUP •
  -----------------------
  1.) npx create-react-app react-router
  2.) cd react-router
  3.) npm start
  4.) npm install react-router-dom

*/

/*
  ==========================================
            BEFORE YOU ASK ME WHY
  ==========================================

  • Let's go to "reactjs.org" and click away while watching the URL.

  • Set information in the URL parameters to help our users know where they're at in our application.

  • Will be THE great ancestor of our app, rendering other components inside of it. 

  • Commonly used "routing" library for React. Looks like React components.

  • Routing allows us to match our URL parameters to render specific components that we want.

 ===== TASKS =====
  1.) Import BrowserRouter in index.js
  2.) Import Link. Create Links inside App.js
  3.) Let's create pages and components folders

  PSA: pages and components folders will all have components but are separated. We put components rendered by React Router in pages because it makes it more organized and easier to differentiate when we start creating more components. So...if the component changes the URL, it should probably go inside pages folder. 

  4.) Let's create a nav bar and a footer
  5.) Move our Links inside NavBar
  6.) Create pages components for About and Contact
  7.) Let's render our pages components. Import Switch and Route. 
*/


class App extends Component {
  render() {
    return (
      <div id="app">
        
        <NavBar />
        {/* 
            We will use <Switch> from React Router which looks inside it's children <Route> to render the first one that matches the URL.

            make sure path inside Route matches your link "to" in NavBar
          
            Important: A route with path="/" will *always* match the URL because all URLs begin with a /. So that's why we put this one last of all 
          
          
          */}

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
          </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;