import React, { Component } from 'react'

import ReactPinboard from 'react-pinboard'
import AllRides from '../components/rides/AllRides'
// import Ride from '../components/rides/Ride'

const ride = this.props

const cols = [
  { media: '(max-width: 1000px)', cols: 4 },
  { media: '(max-width: 500px)', cols: 3 },
  { media: '', cols: 2 }
];

export default class extends Component{

render() {
return(
  <ReactPinboard cols={cols} spacing="2em">
    <img src={ride.imgURL} alt={'Not Available'}/>
    <div>
      <h3>Heading</h3>
      <p>Test</p>
    </div>
    <AllRides/>
    ...
  </ReactPinboard>,
  document.querySelector('pinboard-container')
);
}
}



