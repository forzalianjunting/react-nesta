import React from 'react'
import PropTypes from 'prop-types'

const emptyState = {}

export default function connect(mapStateToProps) {
  if (typeof mapStateToProps !== 'function') {
    throw new Error('Expected mapStateToProps to be a function.')
  }

  return function connectHOC(WrappedComponent) {
    class Connect extends React.Component {
      static contextTypes = {
        store: PropTypes.shape({
          getState: PropTypes.func.isRequired,
          put: PropTypes.func.isRequired,
          subscribe: PropTypes.func.isRequired,
        }).isRequired,
      }

      constructor(props, context) {
        super(props, context)
        const { store } = context
        this.unsubscribe = store.subscribe(() => {
          this.setState(emptyState)
        })
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      render() {
        const { store } = this.context
        const props = {
          ...(mapStateToProps(store.getState()) || {}),
          put: store.put,
        }
        return <WrappedComponent {...props} />
      }
    }

    return Connect
  }
}
