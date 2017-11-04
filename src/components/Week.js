import React from 'react'
import { string, shape } from 'prop-types'

import File from './File'
import BackButton from './BackButton'
import NextButton from './NextButton'

class Week extends React.Component {
  static propTypes = {
    location: shape({
      pathname: string
    })
  }
  render () {
    return (
      <div>
        <File file={{ path: this.props.location.pathname + 'README.md' }} />
        <BackButton />
        <NextButton />
      </div>
    )
  }
}

export default Week
