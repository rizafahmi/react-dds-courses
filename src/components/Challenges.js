import React from 'react'
import axios from 'axios'
import markdown from 'marked'

const constants = require('../.env.json')

class Challenges extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      contents: null
    }
  }
  componentDidMount () {
    let { pathname } = this.props.location

    if (pathname[0] === '/') {
      pathname = pathname.slice(1, pathname.length)
    }
    const url = `${constants.BASE_URL}/contents/${pathname}`
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
          contents: markdown(content)
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    return <div dangerouslySetInnerHTML={{ __html: this.state.contents }} />
  }
}

export default Challenges
