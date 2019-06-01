// @flow
/** Modules **/
import React, { Component } from 'react'

/** Stylesheets **/
import './nodes.css'

/** Types **/
type State = {}
type Props = {}

class Nodes extends Component<Props, State> {
  state: State
  props: Props
  render () {
    return (
      <div className='nodes'>
        nodes
      </div>
    )
  }
}

export default Nodes
