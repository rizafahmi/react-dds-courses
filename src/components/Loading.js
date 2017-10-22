import React from 'react'
import PropTypes from 'prop-types'

const defaultStyles = {
  container: {
    flex: 0,
    padding: 5,
    textAlign: 'center',
  },
  text: {
    color: '#000000',
    padding: 5,
  },
  image: {
    width: 250,
    height: 250,
  },
}

export default class Loading extends React.Component {
  static TYPES = [
    'TEXT',
    'IMAGE'
  ]

  static propTypes = {
    type: PropTypes.oneOf(Loading.TYPES),
    text: PropTypes.string,
    imageSource: PropTypes.string,
    style: PropTypes.object,
    textStyle: PropTypes.object,
    imageStyle: PropTypes.object,
  }

  static defaultProps = {
    type: 'TEXT',
    text: 'Loading...',
    source: 'https://loading.io/spinners/ball/lg.bouncing-circle-loading-icon.gif',
    style: {},
    textStyle: {},
    imageStyle: {},
  }

  constructor(p, c) {
    super(p, c)

    this._renderText = this._renderText.bind(this)
    this._renderImage = this._renderImage.bind(this)
  }

  _renderText() {
    return (
      <span style={{ ...defaultStyles.text, ...this.props.textStyle }}>
        {this.props.text}
      </span>
    )
  }

  _renderImage() {
    return (
      <img alt="Loading" src={this.props.source} style={{ ...defaultStyles.image, ...this.props.imageStyle }} />
    )
  }

  render() {
    return (
      <div style={{ ...defaultStyles.container, ...this.props.style }}>
        {this.props.type === 'TEXT' && this._renderText()}
        {this.props.type === 'IMAGE' && this._renderImage()}
      </div>
    )
  }
}
