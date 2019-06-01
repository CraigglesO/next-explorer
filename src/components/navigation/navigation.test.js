// @flow
/** Modules **/
import React from 'react'
import ReactDOM from 'react-dom'

/** Component **/
import Navigation from './navigation'

// $FlowIgnore
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Navigation />, div)
  ReactDOM.unmountComponentAtNode(div)
})
