// @flow
/** Modules **/
import { createBrowserHistory } from 'history'

/** Components **/
import NodeStore from './nodeStore'

class MainStore {
  history: createBrowserHistory
  nodeStore: NodeStore

  constructor () {
    this.history = createBrowserHistory()
    this.nodeStore = new NodeStore(this)
  }
}

export default new MainStore()
