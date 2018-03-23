import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import { user_id } from '../../config/auth'
import Ride from '../rides/Ride'

class Registry extends Component {
  constructor(props){
    super(props)
    this.state = {
      registry: {},
      total: 0,
      rides: []
    }
  }
  async componentWillReceiveProps(nextProps){
    //check loading and data
    if(!nextProps.data.loading && nextProps.data.user.registry.rides){
      //combine like id's in products obj
      let rides = {}
      nextProps.data.user.registry.rides.map(rides => (rides[rides.ride.id] ?
          rides[rides.ride.id].quantity++
          :
      rides[rides.ride.id] = {...rides.ride, registry_ride_id: rides.id, quantity:1 }
      ))
      //convert obj to array
      rides = Object.values(rides)
      
      //calculate totals
      
       let total = 0
      await rides.map(rides => (rides.quantity))
      await this.setState({ total })
    }
  }
  render(){
    const {total} = this.state
    const {user, loading} = this.props.data
    return(loading && !user ? <div>loading...</div> :
      <div>
        {user.registry.rides === 0 ? <div>no rides in registry!</div> :
          <div>
            <section>
              {this.state.rides.map(ride => {
                return <Ride rideView={true} ride={ride} key={ride.id}/>
              })}
            </section>
            <section>
              <div>total: {total} </div>
            </section>
          </div>
        }
      </div>
    )
  }
}

const USER_REGISTRY_QUERY = gql`
  query($id: ID!){
    user(id:$id){
      registry{
        rides{
          id
          ride{
            id
            name
            imgURL
            loc
            desc
            height
          }
        }}}}`

export default graphql(USER_REGISTRY_QUERY,{options:(props) => ({variables:{id: user_id}})})(Registry)
