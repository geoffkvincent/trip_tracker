import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Trips from './components/Trips'

const App = () => (
  <>
    <Switch>
      <Route exact path= '/' component={Trips}/>
    </Switch>
  </>
)

export default App