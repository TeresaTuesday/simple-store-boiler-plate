import React, {Component} from 'react'

import Registry from '../components/registry/Registry'
import RegistryButton from '../components/registry/RegistryButton'

export default class extends Component {
  render(){
    return(
      <main>
        <RegistryButton label="Clear Registry"/>
        <Registry/>
        <RegistryButton label="Checkout My Rides"/>
      </main>
    )
  }
}
