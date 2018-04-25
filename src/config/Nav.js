import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { yellow50 } from 'material-ui/styles/colors'
// import RaisedButton from 'material-ui/RaisedButton'
// import IconButton from 'material-ui/IconButton'
// import HomeIcon from 'material-ui-icons/Home'
// import ShoppingCartIcon from 'material-ui-icons/ShoppingCart'

//import { ModalButton } from '../components/buttons'
// import CreateUser from '../components/forms/CreateUser'
//import Login from '../components/forms/Login'

// import { isAuthenticated, logout } from './auth'
// import {user_id, logout} from './auth'

import CustomDrawer from './CustomDrawer'

const styles = {
  color: yellow50
}

// const LoggedIn = () => (
//   <span>
//     <IconButton onClick{() => window.location.replace('/registry')}<ShoppingCartIcon/></IconButton>
//   <RaisedButton label={Logout} onClick={logout}/>
//   </span>
// )

// const LoggedOut = () => (
//   <ModalButton label="Login" display={<Login/>}/>
// )

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
  }
  render () {
    const toggleOpen = () => {
      this.setState(() => ({open: (!this.state.open)}))
    }
    return (
      <div>
        <AppBar title="Roller Coaster Boaster"
                titleStyle={styles}
                onLeftIconButtonClick={toggleOpen} />
        <CustomDrawer open={this.state.open}
                      change={toggleOpen}/>
        {/*{(!user_id) ? LoggedOut() : LoggedIn()}*/}
      </div>
    )
  }
}
