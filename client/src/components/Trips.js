import React from 'react'
import axios from 'axios'

class Trips extends React.Component {
  state = { trips: [] }

  componentDidMount() {
    axios.get('api/trips')
      .then( res => this.setState({ trips: res.data }) )
  }

  render () {
    return (
      null
    )
  }
}

export default Trips