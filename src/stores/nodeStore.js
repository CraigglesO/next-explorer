// @flow
/** Modules **/
import typeof MainStore from './'
import { observable } from 'mobx'
import axios from 'axios'

/** Types **/

class NodeStore {
  mainStore: MainStore
  webSocket: WebSocket
  @observable blockHeight: number = 0;
  @observable nodes: number = 0;
  @observable totalNodes: number = 2;

  constructor (main: MainStore) {
    this.mainStore = main

    Promise.all([this._getLatestBlock(), this._getTxs()])
  }

  _getLatestBlock () {
    const self = this
    return new Promise((resolve, reject) => {
      axios.get('https://studio.nearprotocol.com/devnet/block')
        .then(response => {
          self.blockHeight = response?.data?.result?.block?.header?.height || 0
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  _getTxs () {
    const self = this
    return new Promise((resolve, reject) => {
      axios.get('https://studio.nearprotocol.com/devnet/net_info')
        .then(response => {
          self.nodes = response?.data?.result?.n_peers || 0
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export default NodeStore
