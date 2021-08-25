import React from 'react'
import Rating from './Rating';
import Reviews from './Reviews';
import SideBar from './SideBar';
import Visitors from './Visitors';
import Sentiment from './Sentiment';

class App extends React.Component {
  render() {
    return (
    <div>
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
