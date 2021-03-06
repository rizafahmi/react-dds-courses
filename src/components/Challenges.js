import React from 'react'
import axios from 'axios'
import { string, shape } from 'prop-types'
import BackButton from './BackButton'
import NextButton from './NextButton'
import Loading from './Loading'

import markdownToHtml from '../helpers'
const constants = require('../.env.json')

class Challenges extends React.Component {
  static propTypes = {
    location: shape({
      pathname: string
    })
  }
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
          contents: markdownToHtml(content)
        })
      })
      .catch(err => console.log(err))
  }

  render () {
    if (this.state.contents === null) {
      return <Loading />
    }
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: this.state.contents }} />
        <BackButton />
        <NextButton />
      </div>
    )
  }
}

export default Challenges
