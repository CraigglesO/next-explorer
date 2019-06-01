// @flow
/** Modules **/
import React, { Component } from 'react'

/** Stylesheets **/
import './blocks.css'

/** Types **/
type State = {}
type Props = {}

class Blocks extends Component<Props, State> {
  state: State
  props: Props
  render () {
    return (
      <div className='blocks'>
        blocks
      </div>
    )
  }
}

export default Blocks
