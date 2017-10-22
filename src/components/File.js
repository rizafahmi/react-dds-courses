import React from 'react'
import axios from 'axios'
import markdown from 'marked'
import PropTypes from 'prop-types'

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
    const { file } = this.props
    axios
      .get(`${constants.BASE_URL}/contents/${file.path}`, {
        headers: {
          Authorization: `Bearer ${constants.GITHUB_TOKEN}`
        }
      })
      .then(result => {
        const content = Buffer.from(result.data.content, 'base64').toString(
          'ascii'
        )
        this.setState({
          contents: markdown(content)
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    return <div dangerouslySetInnerHTML={{ __html: this.state.contents }} />
  }
}

export default File
