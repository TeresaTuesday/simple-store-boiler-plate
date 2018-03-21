import React, { Component } from 'react'
import { ModalButton } from '../components/buttons'

import AllRides from '../components/products/AllRides'
import CreateRide from '../components/forms/CreateRide'
import CreateUser from '../components/forms/CreateUser'
import Login from '../components/forms/Login'

export default class extends Component {
  render() {
    return (
      <div>
        <ModalButton label="Add Ride" display={<CreateRide/>}/>
        <ModalButton label="Create User" display={<CreateUser/>}/>
        <ModalButton label="Login" display={<Login/>}/>
        <AllRides/>
      </div>
    );
  }
}
