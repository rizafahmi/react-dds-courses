import React from 'react'
import axios from 'axios'

const secret = require('../.env.json')
const BASE_URL = secret.BASE_URL

class Week extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      contents: null
    }
  }
  componentDidMount () {
    axios
      .get(`${BASE_URL}/contents/${this.props.location.pathname}/README.md`, {
        headers: {
          Authorization: `Bearer ${secret.GITHUB_TOKEN}`
        }
      })
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err))
  }
  render () {
    return <pre>AAA</pre>
  }
}

export default Week
