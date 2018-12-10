import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Container } from 'semantic-ui-react'

const Trip = ({ id, name }) => (
  <div>
    <h1>{name}</h1>
      <Link to={`api/trips/${id}/locations`} >
        <h3>Locations</h3>
      </Link>
  </div>
)

class Trips extends React.Component {
  state = { trips: [] }

  componentDidMount() {
    axios.get('/api/trips')
      .then( res => this.setState({ trips: res.data }) )
  }

  renderTrips = () => {
    return this.state.trips.map(trip => (  
      <Trip key={trip.id} {...trip} />
    ))
  }

  render() {
    return (
      <Container>
        {this.renderTrips()}  
      </Container>
    )
  }
}

export default Trips