import React, { Component } from 'react';
import MovieInfo from './MovieInfo';

import './App.css'

/*
=========================================
                NOTES
=========================================

**** OBJECTIVES ****
1.) Asynchronous vs Synchronous
2.) API, JSON
3.) HTTP protocol, SOAP VS REST, HTTP verbs
3.) AJAX - Fetch API - will need discussion of Promises
4.) Use third-party API, render data on our browser

*/

/* ===== SYNCHRONOUS VS ASYNCHRONOUS =====

Synchronous: runs code line per line. Waits for task to finish before moving on.

Asynchronous: Moves to another task before the previous one finishes. Usually anything that will depend on time can be async.

*/

// EXAMPLE OF SYNCHRONOUS
// console.log("Synchronous")
// console.log("Hi")
// console.log("Bye")

// EXAMPLE OF ASYNCHRONOUS - setTimeout, Promises, FETCH
// first argument is a function, second argument is the time laspe before the code runs
// setTimeout(() => {
//   console.log("Asynchronous")
// }, 1000)

// console.log("Hi")
// console.log("Bye")


// ===== API =====
/*

Application Programming Interface: collection fo clearly defined methods of communication between different software components. Allows us to retrieve data from a system aka (database) and use it in our application.

TLDR: API acts as a messenger to send HTTP requests to a server and gives us a response

YouTube: https://youtu.be/s7wmiS2mSXY

*/

// EXAMPLES OF APIs - DOM, Fetch, Third-party APIs

// ===== JSON =====
/*

 Above, we talked about API returning to us a response. One of the most common ways for APIs to store, structure and transfer data is through JSON.

 JSON: JavaScript Object Notation. Just like an object, it has key/value pairs which can take in different data types.

 Format of an JSON object:
 {
   "name": "Teo",
   "age": 23
 }

 Format of typical JavaScript Object:
 {
   name: "Teo"
   age: 23
 }

*/

// ===== HTTP PROTOCOL =====
/*

 Picture example:
 Mod-1 -> Week 4 -> Day 2 -> slide: 9 

 HTTP Protocol: used to deliver data (HTML files, images, etc) on the internet

 TLDR: Transmission Control Protocol and Internet Protocol - protocols that work together to make sure data has a destination and get's there safely

 For more details:
 TCP/IP: https://www.fortinet.com/resources/cyberglossary/tcp-ip
*/

// ===== SOAP VS REST =====
/*

 Picture example:
 Mod-1 -> Week 4 -> Day 2 -> slide: 8

 Go to slide 7: show example of XML document, heavier on resource

 For the sake of this course, we will be focusing on REST using JSON data.

 SOAP: Simple Object Access Protocol - you send a whole XML file
 REST: Representational State Transfer - you send a representational data as JSON object

*/

// ===== URI =====
/*

 Picture example:
 Mod-1 -> Week 4 -> Day 2 -> slide: 11

 URI: Uniform Resource Identifier used in REST architecture

 Purpose: locate resources/access web pages on the server hosting the web service

 Format:
 https://perscholas.instructure.com/courses/799/modules/items/318320
 <protocol>://<service-name>/<ResourceType>/<ResourceID>

 Examples: 
 • https://www.bestbuy.com/site/electronics/customer-service/pcmcat87800050001.c?id=pcmcat87800050001
 • https://try.alexa.com/alexa-tutorials/
 
*/

// ===== RESTFUL ROUTES - HTTP VERBS - CRUD =====
/*

 Above, we see how we are accessing resources/web pages. RESTful routes allows us to use HTTP verbs with the CRUD actions.

 RESTful route: instead of relying solely on the URI/URL to indicate what site to visit, RESTful routes depend on HTTP verb and the URL

 Picture example: will be posted in slack. Important to understand.

 Everytime we access a web page we are making an HTTP GET request


 ======================================
              IMPORTANT
 ======================================
 CRUD cycle: Create, Read, Update, and Delete. Most of the things that wedo online uses these four basic operations of PERSISTENT storage. FOREVER!!!!!!!!!! Remember everything that we are seeing online is data tat is probably being saved in a database.

 Examples of things we can CRUD: files, personal information on a website, instagram photos, gaming profiles

 HTTP verbs: Five verbs that include GET, POST, PUT, PATCH, and DELETE. The ones will be working on in this course will be GET, POST, PUT, DELETE.

 CRUD | HTTP VERB ties in with HTTP requests (combination of CRUD cycle and HTTP verbs)
 ----------------
 Create - POST
 Read - GET
 Update - PUT/PATCH
 Delete - DELETE

 EXAMPLES: Mod-1 -> Week 4 -> Day 2 -> slide: 11-16

 ***** We will be only focusing on GET HTTP requests for Mod 2 *****
*/

// ===== AJAX, PROMISES, FETCH =====

// AJAX: stands for Asynchronous JavaScript and XML - which allows us to update parts of a web page without reloading
// AJAX calls: allows us to do HTTP requests with a server/database without the need for a refresh

// Fetch: allows us to do AJAX calls which returns a Promise

// ===== PROMISE =====
/*

 Promises has three states:
 
 Pending: initial state, neither fulfilled or rejected
 fulfilled: successful
 rejected: something went wrong

*/

// Quick video example of a Promise: https://www.youtube.com/watch?v=RvYYCGs45L4

// Watch in your own time to understand under the hood promises: https://www.youtube.com/watch?v=s6SH72uAn3Q

// Since we don't know when promises will return to us a response, it has built in methods such as .then() that does more things once we get a response

// Show example of under the hood:
// const promiseToDoSomething = new Promise((resolve, rejected) => {
//   // there will be code here that returns a response
//   let something = true
//   if(something === true) {
//     resolve("Success")
//   } else {
//     rejected("Failed")
//   }
// })

// promiseToDoSomething
//   .then()
//   .then()
//   .catch()

// For the sake of us using Fetch, it will just return a Promise object to us that we can use

class App extends Component {
  //getData = () => {
      // fetch - first argument takes in the URL
      // Remember Fetch returns a PROMISE
      // HTTP GET REQUEST
    //fetch('https://jsonplaceholder.typicode.com/todos/1') // returns a PROMISE
      // After we get a PROMISE from fetch() we run the code below
      // The way .then() works is it takes a callback...a function within a function
      // The object response that we get is not readable for us yet
      // The way we TRANSLATE our response to JavaScript is to use the method json()
    //.then( (response)=> {return response.json()})
    //.then(response=> response.json()) //<-implicit return
    //.then(data => console.log(data) )
  //}

  // THIRD PARTY API - Google, Twitter...companies provide APIs which allows us access to their data. 
  // A lot of FREE APIs and some require API keys.

  // ===== API KEYS =====
  // To open the API door -> accessing their data
  // API keys are there for companies to keep track of how you use their data, so you don’t abuse it
  // ==== GOALS ====
  /*
    1.) Get an API key from OMDB
    2.) Write a fetch call to get a Movie based on what we typed
    3.) In our app, we will have an input field where we can type a movie title and render that movie in our application
  */
// STATE - new syntax - HIGHLY RECOMMENDED
  // what our URL query should look like:
  // http://www.omdbapi.com/?apikey=b0cadb26&t=toystory
  // Teo what in the word is the ? and & doing in our URL
  // ===== basic url queries =====
  // The ? starts our query parameters
  // The & is used as a comma when using multiple parameters
  state = {
    movieTitle: '',
    baseUrl: "http://www.omdbapi.com/?",
    apiKey: "apikey=f18dd9e8",
    query: "&t=",
    // searchURL is a combination of baseURL, apiKey, query, and movieTitle
    searchURL: "",
    movieData: {}
  }
  // Note: eventually we will contatenate baseURL + apiKey + query + movieTitle

  handleChange = (event) => {
    //console.log(event.target.value)
    this.setState({
      movieTitle: event.target.value
    })
  }
  handleSubmit= (event) => {
    event.preventDefault()
    //console.log(this.state.baseUrl + this.state.apiKey + this.state.query + this.state.movieTitle)
    // this.setState CAN actually take in TWO arguments
    // first argument is an OBJECT with us updating our state
    // second argument lets us do a CALLBACK - a function call within a function
    // ONLY after we setState to searchURL THEN we are going to invoke/call our second argument
    // setState = asynchronous
    this.setState({
      searchURL: this.state.baseUrl + this.state.apiKey + this.state.query + this.state.movieTitle
    }, () => {
      // let's call our fetch and then use our request string
      fetch(this.state.searchURL) // RETURNS A PROMISE
        .then(response => response.json())
        .then(movie => {
          // save this to our state...WHY?
          this.setState({
            movieData: movie
          })
        })
        .catch(error => console.log(error))
    })
  }

  render() {
    return (
      <div >
        <div id="header" >APIs and Everything in Between</div>
        {/*<button onClick={this.getData}>Fetch</button>*/}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">title: </label>
          <input type="text" id="title" value={this.state.movieTitle} onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
       <MovieInfo movie= {this.state.movieData} />
      </div>
    );
  }
}

export default App;