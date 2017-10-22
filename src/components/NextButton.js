import React from 'react'
import { withRouter } from 'react-router-dom'

const NextButton = (props) => {
  return (
    <button onClick={props.history.goForward}>Next</button>
  )
}

export default withRouter(NextButton)
