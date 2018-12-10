import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Trips from './components/Trips'
import Trip from './components/Trip'

const App = () => (
  <>
    <Switch>
      <Route exact path= '/' component={Trips}/>
      <Route path= 'api/trips/:trip_id/locations' component={Trip} />
    </Switch>
  </>
)

export default App