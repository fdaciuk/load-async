'use strict'

import React, { PureComponent } from 'react'
import t from 'prop-types'

const loadAsync = (promise) => {
  class Async extends PureComponent {
    constructor () {
      super()
      this.state = {
        loaded: false,
        Component: null
      }

      this.mounted = true

      this.getDisplayName = (Comp) => (
        Comp.displayName || Comp.name || 'UnknownComponent'
      )
    }

    async componentDidMount () {
      try {
        const Comp = await promise
        const LoadedComp = Comp.default
        if (this.mounted) {
          this.setState({ loaded: true, Component: LoadedComp })
          Async.displayName = `Async(${this.getDisplayName(LoadedComp)})`
        }
      } catch (e) {
        console.error(e.stack)
      }
    }

    componentWillUnmount () {
      this.mounted = false
    }

    render () {
      return this.state.loaded
        ? <this.state.Component {...this.props} />
        : <div children={this.props.children} />
    }
  }

  Async.propTypes = {
    children: t.node
  }

  return Async
}

export default loadAsync
