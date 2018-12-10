import React from 'react'
import axios from 'axios'
import Trip from './Trip'
import { Container } from 'semantic-ui-react'

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
        {this.renderTrips}
      </Container>
    )
  }
}

export default Trips