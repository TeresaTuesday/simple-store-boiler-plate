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
      nextProps.data.user.registry.rides.map(r => (rides[r.ride.id] ?
          rides[r.ride.id].quantity++
          :
          rides[r.ride.id] = {...r.ride, reg_ride_id: r.id, quantity:1 }
          
      ))
  
      // nextProps.data.user.registry.rides.map(r => ({...r.ride, reg_ride_id: r.id, quantity: r.quantity }))
      
      //convert obj to array
      rides = Object.values(rides)
      
      //calculate totals
      
       let total = 0
      await rides.map(r => (r.quantity))
      
      //one setState to update all altered state variables
      await this.setState({ total, rides })
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
              {this.state.rides.map(r => {
                console.log(r)
                return <Ride registryView={true} ride={r} key={r.id} />
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
