import React from 'react'

// we create our class component
class SideBar extends React.Component {
  render() {
    return(
      <div className='sideBar'>
          <h2>Dashboard</h2>
          <h3>Widget</h3>
          <h3>Reviews</h3>
          <h3>Customers</h3>
          <h3>Online Analysis</h3>
          <h3>Settings</h3>
      </div>
    )
  }
}

export default SideBar;