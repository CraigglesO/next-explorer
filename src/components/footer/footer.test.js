// @flow
/** Modules **/
import React from 'react'
import ReactDOM from 'react-dom'

/** Component **/
import Footer from './footer'

// $FlowIgnore
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Footer />, div)
  ReactDOM.unmountComponentAtNode(div)
})
