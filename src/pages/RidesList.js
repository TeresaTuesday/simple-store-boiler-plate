import React, { Component } from 'react'
import { ModalButton } from '../components/buttons'

import AllRides from '../components/rides/AllRides'
import CreateRide from '../components/forms/CreateRide'
import AllRidesAltTheme from '../config/AllRidesAltTheme'


export default class extends Component {
  render() {
    return (
      <div>
        <ModalButton label="Add Ride" display={<CreateRide/>}/>
        <AllRides key={AllRidesAltTheme}/>
      </div>
    );
  }
}
