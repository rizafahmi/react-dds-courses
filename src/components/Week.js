import React from 'react'
import { string, shape } from 'prop-types'

import File from './File'

class Week extends React.Component {
  static propTypes = {
    location: shape({
      pathname: string,
    }),
  }
  
  constructor (props) {
    super(props)

    this.state = {
      contents: null
    }
  }
  render () {
    return <File file={{path: this.props.location.pathname + 'README.md'}} />
  }
}

export default Week
