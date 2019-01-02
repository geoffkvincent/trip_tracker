import React from 'react'
import axios from 'axios'
import Locations from './Locations'
import {Link} from 'react-router-dom'
import {  } from 'semantic-ui-react';

class Trip extends React.Component {
  state = { locations: [] }

  componentDidMount() {
    const {id} = this.props
    axios.get(`api/trips/${id}/locations`)
      .then(res => this.setState({ locations: res.data }))
  }

  render() { 
    const {name, id} = this.props
    const {locations} = this.state
    return (
      <div>
        <Link to={{ pathname: `/trips/${id}/locations`, state}}>
          <h1>{name}</h1>
        </Link>
        {locations.map(location => <Locations key={location.id} {...location} />)}
      </div>
    )
  }

}

export default Trip
