import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import '../../styles/Form.css'

class CreateRide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      imgURL: '',
      desc: '',
      loc: '',
      height: ''
    }
  }
  
  
  render () {
    const handleSubmit = async (e) => {
      e.preventDefault()
      await this.props.mutate({
        variables: {
          name: this.state.name,
          imgURL: this.state.imgURL,
          desc: this.state.desc,
          loc: this.state.loc,
          height: this.state.height
        }
        
      })
      window.location.replace('/')
    }
    
    return(
      <form className="flexBox"
            onSubmit={handleSubmit}
      >
        <h3>Create Ride</h3>
        <TextField floatingLabelText="Name"
                   onChange={e => this.setState({name: e.target.value})}
        />
        <TextField floatingLabelText="Image-URL"
                   onChange={e => this.setState({imgURL: e.target.value})}
        />
        <TextField floatingLabelText="Description"
                   onChange={e => this.setState({desc: e.target.value})}
        />
        <TextField floatingLabelText="Location"
                   onChange={e => this.setState({loc: e.target.value})}
        />
        <TextField floatingLabelText="Height (ft)"
                   onChange={e => this.setState({height: e.target.value})}
                   type="number"
                   min="0" max="800"
        />
        <RaisedButton label="Create"
                      type="submit"
        />
      </form>
    );
  }
}

const CREATE_RIDE_MUTATION = gql`
  mutation($name: String!, $imgURL: String, $desc: String!, $loc: String, $height: Int!){
    createRide(
      name: $name,
      imgURL: $imgURL,
      desc: $desc,
      loc: $loc,
      height: $height
    ){
      id
    }
  }
`
export default graphql(CREATE_RIDE_MUTATION)(CreateRide)
