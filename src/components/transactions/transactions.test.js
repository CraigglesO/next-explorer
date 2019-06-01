// @flow
/** Modules **/
import React from 'react'
import ReactDOM from 'react-dom'

/** Component **/
import Transactions from './transactions'

// $FlowIgnore
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Transactions />, div)
  ReactDOM.unmountComponentAtNode(div)
})
