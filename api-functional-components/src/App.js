import React from 'react';
import MovieInfo from './MovieInfo'
import './App.css'
const App = () => {

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
};

export default App;