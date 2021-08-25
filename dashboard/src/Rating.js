import React from 'react'

// we create our class component
class Rating extends React.Component {
  render() {
    return(
      <div className='rating'>
          <h3>Average Rating</h3>
          <h2>4.6</h2>
      </div>
    )
  }
}

export default Rating;