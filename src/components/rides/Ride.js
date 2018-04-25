import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'

import IconButton from 'material-ui/IconButton'
import AddCircle from 'material-ui-icons/AddCircle'
import RemoveCircle from 'material-ui-icons/RemoveCircle'

import { ModalButton } from '../buttons'
import UpdateRide from '../forms/UpdateRide'


import '../../styles/Form.css'
import { user_id } from '../../config/auth'

class Ride extends Component {
  
  render() {
    const {addToRegistry, removeFromRegistry, ride} = this.props
    
    console.log(this.props)
    
    //cart functions
    const AddToRegistry = async () => {
      await addToRegistry({variables:{ride_id:ride.id}}).then(r => console.log(r))
      window.location.replace('/registry')
    }
    const RemoveFromRegistry = async () => {
      console.log(ride.reg_ride_id)
      console.log(user_id)
      await removeFromRegistry({variables:{ride_id: ride.reg_ride_id}}).then(r => console.log(r)).catch(err => console.log(err) )
      window.location.replace('/registry')
    }

    // const DeleteRide = () => (
    //   <RaisedButton label="Confirm Delete"
    //                 onClick={handleClick}
    //   />
    // )
    // const handleClick = async (e) => {
    //   e.preventDefault()
    //   await this.props.mutate()
    //   window.location.replace('/')
    // }
    
    return(
      <div>
      <Paper className='ride' zDepth={5}>
        {/*<i class="material-icons">add_circle</i>*/}
          <h2>{ride.name}</h2>
          <img src={ride.imgURL} alt={'Not Available'}/>
          <div>{ride.loc}</div>
          <p>{ride.desc}</p>
          <p>{ride.height}</p>
        
        {this.props.registryView?
        <div>
          <IconButton onClick={() => RemoveFromRegistry()}><RemoveCircle/></IconButton>
          <div>Quantity: {ride.quantity}</div>
        </div>
        :
        <span className="buttons">
          <ModalButton label="Update" display={<UpdateRide ride={ride} />} />
        {/*<ModalButton label="Delete" display={DeleteRide()} color="secondary"/>*/}
        <span className="modal">
          <IconButton onClick={() => AddToRegistry()}><AddCircle/></IconButton>
        </span>
        </span>
          }
      </Paper>
      </div>
    )
  }
}

// const DELETE_RIDE_MUTATION = gql`
//   mutation($id: ID!) {
//     deleteRide(
//       id: $id
//     ){
//       id
//     }
//   }
// `

const ADD_TO_REGISTRY = gql`
  mutation($user_id:ID!, $ride_id:ID!){
    addRideToRegistry(
      user_id: $user_id
      ride_id: $ride_id
    ){
      registry{
        id
        rides{
          ride{
            id
            name
          }
        }
      }
    }
  }
`

const REMOVE_FROM_REGISTRY = gql`
  mutation($user_id:ID!, $ride_id:ID!){
    removeRideFromRegistry(
      user_id: $user_id
      ride_id: $ride_id
    ){
      registry {
        id
        rides{
          ride{
            id
            name
          }
        }
      }
    }
  }
`

export default compose(
  graphql(ADD_TO_REGISTRY,{name:'addToRegistry', options: () => ({variables:{user_id}})}),
  graphql(REMOVE_FROM_REGISTRY,{name:'removeFromRegistry', options: () => ({variables:{user_id}})})
)(Ride)
// graphql(DELETE_PRODUCT_MUTATION, {options: (props) => ({variables: {id: props.product.id}})})

