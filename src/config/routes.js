import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProductsList from '../pages/ProductsList'
import Login from '../components/forms/Login'

// const Home = () => (
//   <div>Home Page</div>
// )



export default () => (
  <Switch>
    <Route exact path="/" component={ProductsList} />
    <Route path="/Login" component={Login} />

  </Switch>
)
