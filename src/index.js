import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import './styles/main.css'

import Nav from './config/Nav'

import {apollo} from './config/apollo'
import Routes from './config/routes'

const App = (
  <div>
    <Nav/>
    <hr/>
    <Routes/>
  </div>
)


const AppWrapper = (
  <div className="mainPage">
    <ApolloProvider client={apollo}>
    <MuiThemeProvider>
      <div>
        <AppBar className='header'
                title='Roller Coaster Boaster'
                iconClassNameRight='muidocs-icon-navigation-expand-more'/>
        
        <Router>
          {App}
        </Router>
      </div>
    </MuiThemeProvider>
  </ApolloProvider>
    </div>
)

ReactDOM.render(
  AppWrapper,
  document.getElementById('root'),
)
