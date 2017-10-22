import React from 'react'
import { withRouter } from 'react-router-dom'

const BackButton = (props) => {
  return (
    <button onClick={props.history.goBack}>Back</button>
  )
}

export default withRouter(BackButton)
