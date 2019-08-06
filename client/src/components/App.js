import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'

import Homepage from './Homepage'
import Attending from './Attending'
import NotAttending from './NotAttending'

export default props => {
  return (
    <Provider store={store}>
      <Router>
          <div>
            <Route exact path = '/' component={Homepage}></Route>
            <Route path = '/attending' component={Attending}></Route>
            <Route path = '/notattending' component={NotAttending}></Route>
          </div>
      </Router>
    </Provider>
  )
}