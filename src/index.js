import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './styles/main.css'

import Nav from './config/Nav'
import theme from './config/theme'
// import AllRidesAltTheme from './config/AllRidesAltTheme'


import {apollo} from './config/apollo'
import Routes from './config/routes'
// import './images/roller-coaster-clipart-04.jpg'


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
    <MuiThemeProvider muiTheme={theme}>
      <div>
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
