import React from 'react'
import Rating from './Rating';
import Reviews from './Reviews';
import SideBar from './SideBar';
import Visitors from './Visitors';
import Sentiment from './Sentiment';
import './App.css'
class App extends React.Component {
  render() {
    return (
    <div className="container">
      <SideBar />
      <Reviews />
      <Rating />
      <Sentiment />
      <Visitors />
    </div>
    )
  }
}
export default App;
