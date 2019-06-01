// @flow
/** Modules **/
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route } from 'react-router-dom'
import { Provider } from 'mobx-react'

/** Components **/
import {
  App,
  Blocks,
  Contracts,
  Dashboard,
  Nodes,
  Transactions
} from './components'

/** Stylesheets **/
import './index.css'

/** State Manager **/
import MainStore from './stores'

/** Service Workers **/
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Router history={MainStore.history}>
    <Provider history={MainStore.history} mainStore={MainStore} nodeStore={MainStore.nodeStore}>
      <App>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/blocks' component={Blocks} />
        <Route exact path='/contracts' component={Contracts} />
        <Route exact path='/nodes' component={Nodes} />
        <Route exact path='/transactions' component={Transactions} />
      </App>
    </Provider>
  </Router>, // $FlowIgnore
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
