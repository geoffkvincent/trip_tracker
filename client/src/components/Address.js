import React from 'react'
import axios from 'axios'

class Address extends React.Component{
  state= { addresses: [] }

  componentDidMount() {
    const {trip_id, location_id} = this.props.match.params
    axios.get(`/trips/${trip_id}/locations/${location_id}/address`)
      .then( res => this.setState({ addresses: res.data }))
  }

  render() {
    return (
      null
    )
  }
}

export default Address