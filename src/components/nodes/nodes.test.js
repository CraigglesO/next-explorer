// @flow
/** Modules **/
import React from 'react'
import ReactDOM from 'react-dom'

/** Component **/
import Nodes from './nodes'

// $FlowIgnore
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Nodes />, div)
  ReactDOM.unmountComponentAtNode(div)
})
