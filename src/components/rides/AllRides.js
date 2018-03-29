import React, {Component} from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Ride from './Ride'
// import { GridTile} from 'material-ui/GridList';
//import Masonry from 'react-masonry-component';
import ReactPinboard from 'react-pinboard'

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

// const RideGrid = (allRides) => (
//   <section>
//     <GridList cols={4} cellHeight="auto">
//       <Subheader>Rides</Subheader>
//       {allRides.map(ride => (
//         <GridTile className='tile' cols={2} key={ride.id}>
//           <Ride registryView={false} ride={ride} key={ride.id}/>
//         </GridTile>
//       ))}
//     </GridList>
//   </section>
// )

const cols = [
  { media: '(max-width: 1000px)', cols: 4 },
  { media: '(max-width: 500px)', cols: 3 },
  { media: '', cols: 2 }
];
const RideGrid = (allRides) => (
  <div>
    <ReactPinboard cols={cols} spacing="10px">
      <Subheader>Rides</Subheader>
      {allRides.map(ride => (
        <div className='tile'>
          <Ride registryView={false} ride={ride} key={ride.id} />
        </div>
      ))}
    </ReactPinboard>
  </div>
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
