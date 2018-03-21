import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from '../components/forms/Login'
import RidesList from '../pages/RidesList'
import User from '../pages/User'



export default () => (
  <Switch>
    <Route exact path="/" component={RidesList} />
    <Route exact path="/users/:userID" component={User} />
    <Route path="/Login" component={Login} />
  </Switch>
)
