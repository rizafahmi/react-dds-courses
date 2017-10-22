import React from 'react'

import File from './File'

class Week extends React.Component {
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
