import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Trips from './components/Trips'
import Locations from './components/Locations'
import Address from './components/Address'

const App = () => (
  <>
    <Switch>
      <Route exact path= '/' component={Trips} />
      <Route exact path='/trips/:trip_id/locations' component={Locations} />
      <Route exact path='/trips/:trip_id/locations/location_id/address' component={Address} />
    </Switch>
  </>
)

export default App
