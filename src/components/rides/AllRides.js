import React, {Component} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Ride from './Ride'
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import '../../styles/AllProducts.css'

class AllRides extends Component {
  render() {
    
    const { allRides } = this.props.data
    
    return (!this.props.loading && allRides) ? (
      <section className='list'>
        {RideGrid(allRides)}
      </section>
      
    ) : <div>loading</div>
  }
}

const RideGrid = (allRides) => (
  <section>
    <GridList cols={4} cellHeight="auto">
      <Subheader>Rides</Subheader>
      {allRides.map(ride => (
        <GridTile className='tile' key={ride.id}>
          <Ride rideView={false} ride={ride} />
        </GridTile>
      ))}
    </GridList>
  </section>
)

const ALL_RIDES_QUERY = gql`
  query{
    allRides {
      id
      name
      imgURL
      loc
      desc
      height
    }
  }
`

export default graphql(ALL_RIDES_QUERY)(AllRides)
