import React, { useState } from 'react';
import MovieInfo from './MovieInfo'
import './App.css'
const App = () => {

  const [movieTitle, setMovieTitle] = useState('')
  const [baseUrl, setBaseUrl] = useState('http://www.omdbapi.com/?')
  const [apiKey, setApiKey] = useState("apikey=f18dd9e8")
  const [query, setQuery] = useState("&t=")
  const [searchUrl, setSearchUrl] = useState("")
  const [movieData, setMovieData] = useState({})

  const handleChange = (e) => {
    setMovieTitle(e.target.value)
    console.log(movieTitle)
  }

   const handleSubmit = (e) => {
     e.preventDefault()
     setSearchUrl(baseUrl + apiKey + query + movieTitle)
       fetch(searchUrl)
       .then(response => response.json())
       .then(movie => setMovieData(movie))
       .catch(error => console.log(error))
     }
    
   

  return (
    <div >
        <div id="header" >APIs and Everything in Between</div>
        {/*<button onClick={this.getData}>Fetch</button>*/}
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">title: </label>
          <input type="text" id="title" value={movieTitle} onChange={handleChange}/>
          <button type="submit">Submit</button>
        </form>
       <MovieInfo movie= {movieData} />
      </div>
  );
};

export default App;