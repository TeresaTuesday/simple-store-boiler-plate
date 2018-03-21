import React, {Component} from 'react'
import UpdateRide from '../forms/UpdateRide'
import Paper from 'material-ui/Paper'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import RaisedButton from 'material-ui/RaisedButton'

import { ModalButton } from '../buttons'

import '../../styles/Form.css'

class Ride extends Component {
  render() {
    const {ride} = this.props
    const DeleteRide = () => (
      <RaisedButton label="Confirm Delete"
                    onClick={handleClick}
      />
    )
    const handleClick = async (e) => {
      e.preventDefault()
      await this.props.mutate()
      window.location.replace('/')
    }
    return(
      <Paper className='ride' zDepth={5}>
        
          <h2>{ride.name}</h2>
          <img src={ride.imgURL} alt={'Not Available'}/>
          <div>{ride.loc}</div>
          <p>{ride.desc}</p>
          <p>{ride.height}</p>
        
        <ModalButton label="Update" display={<UpdateRide ride={ride}/>}/>
        <ModalButton label="Delete" display={DeleteRide()} color="secondary"/>
      </Paper>
    )
  }
}

const DELETE_RIDE_MUTATION = gql`
  mutation($id: ID!) {
    deleteRide(
      id: $id
    ){
      id
    }
  }
`

export default graphql(DELETE_RIDE_MUTATION,
  {options: (props) => ({variables: {id: props.ride.id}})}
)(Ride)
