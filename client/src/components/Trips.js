import React from 'react'
import axios from 'axios'

class Trips extends React.Component {
  state = { trips: [] }

  componentDidMount() {
    axios.get('/api/trips')
      .then( res => this.setState({ trips: res.data }) )
  }

  render() {
    return (
      <h1>HELLO</h1>
    )
  }
}

export default Trips