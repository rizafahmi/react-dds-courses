import React, { Component } from 'react'
import axios from 'axios'
const secret = require('./.env.json')

const BASE_URL = 'https://api.github.com/repos/hacktiv8/uph-bootcamp'

class App extends Component {
  constructor () {
    super()

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
      <div className='App'>
        <h1>Files</h1>
        <pre>{this.state.files && JSON.stringify(this.state.files)}</pre>
        {this.state.files &&
          this.state.files.map(file => (
            <div>
              <h3>{file.name}</h3>

              <pre>{JSON.stringify(file)}</pre>
            </div>
          ))}
        <hr />
        <hr />
        <h2>Directories</h2>
        <pre>
          {this.state.directories && JSON.stringify(this.state.directories)}
        </pre>
      </div>
    )
  }
}

export default App
