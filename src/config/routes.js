import React from 'react'
import { Route, Switch } from 'react-router-dom'
<<<<<<< HEAD
=======
import ProductsList from '../pages/ProductsList'
import Login from '../components/forms/Login'
>>>>>>> 7c8242624bc2467019df42ac86d3130da53bbce3

import ProductsList from '../pages/ProductsList'
import User from '../pages/User'



export default () => (
  <Switch>
    <Route exact path="/" component={ProductsList} />
<<<<<<< HEAD
    <Route exact path="/users/:userID" component={User} />
=======
    <Route path="/Login" component={Login} />

>>>>>>> 7c8242624bc2467019df42ac86d3130da53bbce3
  </Switch>
)
