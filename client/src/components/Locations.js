import React from 'react'
import { Link } from 'react-router-dom'

class Locations extends React.Component {


  render() {
    const { locations } = this.props.location.state
    const { trip_id } = this.props.match.params
    return(
      <div>
        {locations.map(location =>
          <ul key={location.id}>
            <Link to={`/trips/${trip_id}/locations/${location.id}/address`}>
              <li >{location.name}</li>
            </Link>
              <p>{location.days}</p>
          </ul>
        )}
      </div>
    )
  }
}

export default Locations;