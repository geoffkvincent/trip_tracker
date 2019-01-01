import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Trips from './components/Trips'
import Locations from './components/Locations'


const App = () => (
  <>
    <Switch>
      <Route exact path= '/' component={Trips} />
      <Route path='/trips/:trip_id/locations' component={Locations} />
    </Switch>
  </>
)

export default App
