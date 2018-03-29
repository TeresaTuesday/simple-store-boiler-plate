import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import { yellow50 } from 'material-ui/styles/colors'

import CustomDrawer from './CustomDrawer'

const styles = {
  color: yellow50
}
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
      </div>
    )
  }
}
