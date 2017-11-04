import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'

import Home from './components/Home'
import Week from './components/Week'
import Challenges from './components/Challenges'
import References from './components/References'
import Directories from './components/Directories'

const secret = require('./.env.json')
const BASE_URL = secret.BASE_URL

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      files: null,
      directories: null
    }
  }
  componentDidMount () {
    axios
      .get(`${BASE_URL}/contents/`, {
        headers: {
          Authorization: `Bearer ${secret.GITHUB_TOKEN}`
        }
      })
      .then(response => {
        this.setState({
          files: response.data.filter(
            item => item.type === 'file' && item.name.indexOf('.md') > 0
          ),
          directories: response.data.filter(item => item.type === 'dir')
        })
      })
      .catch(err => console.log(err))
  }
  render () {
    return (
      <Router>
        <div>
          <Directories directories={this.state.directories} />
          <hr />
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
