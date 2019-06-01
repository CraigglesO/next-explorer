// @flow
/** Modules **/
import React, { Component } from 'react'
import type { Node } from 'react'

/** Components **/
import { Navigation, Footer } from '../'

/** Stylesheets **/
import './app.css'

/** Types **/
type State = {}
type Props = {
  children?: Node
}

class App extends Component<Props, State> {
  state: State
  props: Props
  render () {
    const { children } = this.props
    return (
      <div className='App'>
        <Navigation />
        {children}
        <Footer />
      </div>
    )
  }
}

export default App
