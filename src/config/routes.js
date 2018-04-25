import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from '../components/forms/Login'
import RidesList from '../pages/RidesList'
import User from '../pages/User'
import ViewRegistry from '../pages/ViewRegistry'
import CreateUser from '../components/forms/CreateUser'



export default () => (
  <Switch>
    <Route exact path="/" component={RidesList} />
    <Route exact path="/CreateUser" component={CreateUser} />
    <Route exact path="/users/:userID" component={User} />
    <Route exact path="/Login" component={Login} />
    <Route exact path="/registry" component={ViewRegistry}/>
  </Switch>
)
