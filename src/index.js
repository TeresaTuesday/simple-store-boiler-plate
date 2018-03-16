import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import './styles/main.css'
import './images/FireworksHome.jpg'

//import nav from './components/nav'

import {apollo} from './config/apollo'
import Routes from './config/routes'

const App = (
  <div>
     {/*<nav/>*/}
    <Routes/>
  </div>
)


const AppWrapper = (
  <div className="mainPage">
    <ApolloProvider client={apollo}>
    <MuiThemeProvider>
      <AppBar className='header'
              title='Firework Gettin Place'
              iconClassNameRight='muidocs-icon-navigation-expand-more'/>
      
      <Router>
        {App}
      </Router>
    </MuiThemeProvider>
  </ApolloProvider>
    </div>
)

ReactDOM.render(
  AppWrapper,
  document.getElementById('root'),
)
