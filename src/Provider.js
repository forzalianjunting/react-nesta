import React from 'react'
import PropTypes from 'prop-types'

export default class Provider extends React.Component {
  static propTypes = {
    store: PropTypes.shape({
      getState: PropTypes.func.isRequired,
      put: PropTypes.func.isRequired,
      subscribe: PropTypes.func.isRequired,
    }).isRequired,
    children: PropTypes.any,
  }

  static childContextTypes = {
    store: PropTypes.shape({
      getState: PropTypes.func.isRequired,
      put: PropTypes.func.isRequired,
      subscribe: PropTypes.func.isRequired,
    }).isRequired,
  }

  getChildContext() {
    const { store } = this.props
    return {
      store,
    }
  }

  render() {
    const { children } = this.props
    return children
  }
}
