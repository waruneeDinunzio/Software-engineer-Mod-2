import React, { Component } from 'react';

class MovieInfo extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
              <h1>Title: {this.props.movie.Title}</h1>
              <h2>Year: {this.props.movie.Year}</h2>
              <img src={this.props.movie.Poster} alt={this.props.movie.Title} />
              
            </div>
        );
    }
}

export default MovieInfo;