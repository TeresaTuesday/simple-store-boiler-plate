import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import RaisedButton from 'material-ui/RaisedButton'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: ''
    }
  }
  componentWillReceiveProps(nextProps){
    if(!nextProps.data.loading){
      return this.setState({
        name: nextProps.data.user.name,
        email: nextProps.data.user.email
      })
    }
  }
  
  render() {
    console.log(this.props)
    const handleClick= (match) => {
      window.location.replace(match)
    }
    return (
      <div>
        <h2>{this.state.name}</h2>
        <h2>{this.state.email}</h2>
        <RaisedButton label="Home" type="submit" onClick={() => handleClick('/')} />
        <RaisedButton label="View Registry" type="submit" onClick={() => handleClick('/registry')} />
      </div>
    )
  }
}

const USER_QUERY = gql`
  query($id: ID!){
    user (
       id: $id
    ){
      id
      name
      email
    }
  }
`

export default graphql(USER_QUERY, {
  options: ({match}) => (
    {variables: {id: match.params.userID}})})(User)
