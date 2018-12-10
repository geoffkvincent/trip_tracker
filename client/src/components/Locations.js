import React from 'react'
import axios from 'axios'

class Locations extends React.Component {
  state = { locations: [] }

  componentDidMount() {
    axios.get(`api/trips/${this.props.trip.id}/locations`)
      .then( res => this.setState({ locations: res.data }) )
  }

  render() {
    
    return (
      <div></div>
    )
  }
}

export default Locations;