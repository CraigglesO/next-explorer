// @flow
/** Modules **/
import React from 'react'
import ReactDOM from 'react-dom'

/** Component **/
import Blocks from './blocks'

// $FlowIgnore
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Blocks />, div)
  ReactDOM.unmountComponentAtNode(div)
})
