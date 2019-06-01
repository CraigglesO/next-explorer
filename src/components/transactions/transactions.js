// @flow
/** Modules **/
import React, { Component } from 'react'

/** Stylesheets **/
import './transactions.css'

/** Types **/
type State = {}
type Props = {}

class Transactions extends Component<Props, State> {
  state: State
  props: Props
  render () {
    return (
      <div className='transactions'>
        transactions
      </div>
    )
  }
}

export default Transactions
