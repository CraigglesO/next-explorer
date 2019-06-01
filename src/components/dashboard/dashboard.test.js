// @flow
/** Modules **/
import React from 'react'
import ReactDOM from 'react-dom'

/** Component **/
import Dashboard from './dashboard'

// $FlowIgnore
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Dashboard nodeStore={{ blockHeight: 0, nodes: 0, totalNodes: 0 }} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
