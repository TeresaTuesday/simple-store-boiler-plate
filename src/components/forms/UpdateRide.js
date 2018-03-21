import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import '../../styles/Form.css'

class UpdateRide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.ride.name,
      imgURL: props.ride.imgURL,
      loc: props.ride.loc,
      desc: props.ride.desc,
      height: props.ride.height
    }
  }
  
  render() {
    const handleSubmit = async (e) => {
      e.preventDefault()
      await this.props.mutate({
        variables: {
          name: this.state.name,
          imgURL: this.state.imgURL,
          loc: this.state.loc,
          desc: this.state.desc,
          height: this.state.height
        }
      })
      window.location.replace('/')
    }
    
    return(
      <form className="flexBox"
            onSubmit={handleSubmit}
      >
        <h3>Update Ride</h3>
        <TextField floatingLabelText="Name"
                   value={this.state.name}
                   onChange={e => this.setState({name: e.target.value})}
        />
        <TextField floatingLabelText="Image-URL"
                   value={this.state.imgURL}
                   onChange={e => this.setState({imgURL: e.target.value})}
        />
        <TextField floatingLabelText="Location"
                   value={this.state.loc}
                   onChange={e => this.setState({loc: e.target.value})}
        />
        <TextField floatingLabelText="Description"
                   value={this.state.desc}
                   onChange={e => this.setState({desc: e.target.value})}
        />
        <TextField floatingLabelText="Height"
                   value={this.state.height}
                   onChange={e => this.setState({height: e.target.value})}
        />
        <RaisedButton label="Update"
                      type="submit"
        />
      </form>
    );
  }
}

const UPDATE_RIDE_MUTATION = gql`
  mutation($id: ID!, $name: String!, $imgURL: String, $loc: String, $desc: String!, $height: Int!){
    updateRide(
      id: $id,
      name: $name,
      imgURL: $imgURL,
      loc: $loc,
      desc: $desc,
      height: $height
    ){
      id
    }
  }
`
export default graphql(UPDATE_RIDE_MUTATION,
  { options:(props) => ({ variables: {id: props.ride.id}})}
  )(UpdateRide)
