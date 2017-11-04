import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

import Loading from './Loading'
import markdownToHtml from '../helpers'
const constants = require('../.env.json')

class File extends React.Component {
  static propTypes = {
    file: PropTypes.object
  }
  constructor (props) {
    super(props)

    this.state = {
      contents: null
    }
  }
  componentDidMount () {
    let { file } = this.props
    if (file.path[0] === '/') {
      file.path = file.path.slice(1, file.path.length)
    }
    const url = `${constants.BASE_URL}/contents/${file.path}`
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${constants.GITHUB_TOKEN}`
        }
      })
      .then(result => {
        const content = Buffer.from(result.data.content, 'base64').toString(
          'ascii'
        )
        this.setState({
          contents: markdownToHtml(content)
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    if (this.state.contents === null) {
      return <Loading />
    }

    return <div dangerouslySetInnerHTML={{ __html: this.state.contents }} />
  }
}

export default File
