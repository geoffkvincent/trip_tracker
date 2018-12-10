import React from 'react'
import axios from 'axios'

class Trip extends React.Component {
  state = { locations: [] }

  componentDidMount() {
    axios.get(`api/trips/${this.props.trip.id}/locations`)
      .then( res => this.setState({ locations: res.data }) )
  }

  render() {
    const {name, id} = this.props
    return (
      <div>{name}</div>
    )
  }
}

export default Trip;