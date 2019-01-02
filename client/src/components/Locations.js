import React from 'react'
import { Link } from 'react-router-dom'

class Locations extends React.Component {


  render() {
    const { locations } = this.props.location.state
    const { url } = this.props.match
    return(
      <div>
        {locations.map(location =>
          <ul key={location.id}>
            <Link to={`/url/{location.id}`}>
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