import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
import Week from './components/Week'
import Challenges from './components/Challenges'
import References from './components/References'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/:path' component={Week} />
          <Route
            exact
            path='/:path/challenges/:challenge_name/:filename'
            component={Challenges}
          />
          <Route
            exact
            path='/:path/challenges/:filename'
            component={Challenges}
          />
          <Route
            exact
            path='/:path/references/:filename'
            component={References}
          />
        </div>
      </Router>
    )
  }
}

export default App
