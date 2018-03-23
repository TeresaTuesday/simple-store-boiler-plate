import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import RaisedButton from 'material-ui/RaisedButton'
import { user_id } from '../../config/auth'

class RegistryButton extends Component {
  render(){
    return(
      <RaisedButton
        label={this.props.label}
        onClick={() => {
          this.props.mutate()
          //window.location.replace('/')
        }} />
    )
  }
}

const CLEAR_REGISTRY_MUTATION = gql`
  mutation($user_id:ID!){
    clearRegistry(
      user_id: $user_id
    ){
      registry {
        id
        rides {
          id
        }
      }
    }
  }
`

export default graphql(CLEAR_REGISTRY_MUTATION, {options:(props)=> ({variables:{user_id}})})(RegistryButton)
