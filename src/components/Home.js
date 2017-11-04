import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import File from './File'
import BackButton from './BackButton'
import NextButton from './NextButton'
import Loading from './Loading'

const secret = require('../.env.json')
const BASE_URL = secret.BASE_URL

export default class Home extends React.Component {
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
    if (this.state.files === null || this.state.directories === null) {
      return <Loading />
    }

    return (
      <div>
        <ul>
          {this.state.directories &&
            this.state.directories.map(course => {
              return (
                <li key={course.sha}>
                  <Link to={'/' + course.name + '/'}>{course.name}</Link>
                </li>
              )
            })}
        </ul>
        <hr />
        {this.state.files &&
          this.state.files.map(file => (
            <div key={file.sha}>
              <File file={file} />
            </div>
          ))}
        <BackButton />
        <NextButton />
      </div>
    )
  }
}
