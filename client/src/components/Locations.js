import React from 'react'

class Locations extends React.Component {
  render() {
    const { locations } = this.props.location.state
    return(
      <div>
        {locations.map(location =>
          <ul>
            <li key={location.id}>{location.name}</li>
              <p>{location.name}</p>
          </ul>
        )}
      </div>
    )
  }
}

export default Locations;