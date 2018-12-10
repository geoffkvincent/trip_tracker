import React from 'react'
import axios from 'axios'
import Locations from './Locations'
import {Link} from 'react-router-dom'
import { Container } from 'semantic-ui-react'

class Trip extends React.Component {
  state = { locations: [] }

  componentDidMount() {
    axios.get(`api/trips/${this.props.id}/locations`)
      .then( res => this.setState({ locations: res.data }) )
  }
  render() {
    const {id, name} = this.props
    return (
      <div>
        <h1>{name}</h1>
        <Link to={`api/trips/${id}/locations`} >
          <h3>Locations</h3>
        </Link>
        <Locations tripId={id}/>
      </div>
    )
  }
 
}

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