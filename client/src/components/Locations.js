import React from 'react'

class Locations extends React.Component {
  render() {
    const { locations } = this.props.location.state
    return(
      <div>
        {locations.map(location =>
          <ul key={location.id}>
            <li >{location.name}</li>
              <p>{location.days}</p>
          </ul>
        )}
      </div>
    )
  }
}

export default Locations;