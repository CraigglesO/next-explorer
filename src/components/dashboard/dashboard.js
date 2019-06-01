// @flow
/** Modules **/
import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

/** Assets **/
import nodesOnlineIcon from '../../assets/images/icon-nodes-online.svg'
import blockHeightIcon from '../../assets/images/icon-block-height.svg'
import tpsMaxIcon from '../../assets/images/icon-tps.svg'
import lastDayTxIcon from '../../assets/images/icon-m-transaction.svg'
import accountsIcon from '../../assets/images/icon-accounts.svg'
import recentTxIcon from '../../assets/images/icon-recent-tx.svg'
import recentBlocksIcon from '../../assets/images/icon-recent-blocks.svg'
import transferIcon from '../../assets/images/icon-transfer.svg'

/** Stylesheets **/
import './dashboard.css'

/** Types **/
import typeof NodeStore from '../../stores/nodeStore'
type State = {}
type Props = {
  nodeStore: NodeStore
}

// $FlowIgnore
@inject('nodeStore')
@observer
class Dashboard extends Component<Props, State> {
  state: State
  props: Props
  render () {
    const { blockHeight, nodes, totalNodes } = this.props.nodeStore

    return (
      <div className='container dashboard'>
        <header><h1>Dashboard</h1></header>

        {/* Statistics */}
        <div className='topic-container' id='dashboard-statistics-container'>
          {/* Nodes Online */}
          <div className='dashboard-statistics-subcontainer'>
            <div className='dashboard-node-header'>
              <div><img src={nodesOnlineIcon} alt='nodes online' /></div>
              <div>Nodes Online</div>
            </div>
            <div className='dashboard-node-value'>{numberWithCommas(nodes)}<span className='dashboard-text-light'>/{numberWithCommas(totalNodes)}</span></div>
          </div>
          {/* Block Height */}
          <div className='dashboard-statistics-subcontainer'>
            <div className='dashboard-node-header'>
              <div><img src={blockHeightIcon} alt='block height' /></div>
              <div>Block Height</div>
            </div>
            <div className='dashboard-node-value'>{numberWithCommas(blockHeight)}</div>
          </div>
          {/* TPS / Max */}
          <div className='dashboard-statistics-subcontainer'>
            <div className='dashboard-node-header'>
              <div><img src={tpsMaxIcon} alt='tps / max' /></div>
              <div>TPS/Max</div>
            </div>
            <div className='dashboard-node-value'>{numberWithCommas(27)}<span className='dashboard-text-light'>/{numberWithCommas(748)}</span></div>
          </div>
          {/* Last Day TX */}
          <div className='dashboard-statistics-subcontainer'>
            <div className='dashboard-node-header'>
              <div><img src={lastDayTxIcon} alt='last day tx' /></div>
              <div>Last Day TX</div>
            </div>
            <div className='dashboard-node-value'>{numberWithCommas(2477500)}</div>
          </div>
          {/* Accounts */}
          <div className='dashboard-statistics-subcontainer'>
            <div className='dashboard-node-header'>
              <div><img src={accountsIcon} alt='accounts' /></div>
              <div>Accounts</div>
            </div>
            <div className='dashboard-node-value'>{numberWithCommas(2133478)}</div>
          </div>
        </div>

        {/* 15 Day Transaction History */}

        {/* Block Locations */}

        <div id='dashboard-recents-container'>
          {/* Recent Transactions */}
          <div id='dashboard-recent-tx-container'>
            <div className='dashboard-subtopic-header'>
              <img src={recentTxIcon} alt='recent tx' />
              <div className='sub-topic-header'>Recent Transactions</div>
            </div>
            {temporaryTx}
            {temporaryTx}
            {temporaryTx}
            {temporaryTx}
            {temporaryTx}
            {temporaryTx}
            {temporaryTx}
            {temporaryTx}
            {temporaryTx}
            {temporaryTx}
          </div>

          {/* Recent Blocks */}
          <div id='dashboard-recent-blocks-container'>
            <div className='dashboard-subtopic-header'>
              <img src={recentBlocksIcon} alt='recent blocks' />
              <div className='sub-topic-header'>Recent Blocks</div>
            </div>
            <div className='dashboard-blocks-full-container'>
              <div className='dashbboard-blocks-left-border' />
              <div className='dashboard-blocks-container'>
                {temporaryBlock}
                {temporaryBlock}
                {temporaryBlock}
                {temporaryBlock}
                {temporaryBlock}
                {temporaryBlock}
                {temporaryBlock}
                {temporaryBlock}
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

const temporaryTx = (
  <div className='dashboard-tx-container'>
    <div className='dashboard-tx-type-container'>
      <div className='dashboard-tx-circle'>
        <img src={transferIcon} alt='sent tx' />
      </div>
    </div>
    <div className='dashboard-tx-details'>
      <div className='dashboard-tx-primary-secondary'>
        <div className='dashboard-tx-primary-details'>Sent: 125 Ⓝ  to @jake.near</div>
        <div className='dashboard-tx-primary-hash'>69a3a68...</div>
      </div>
      <div className='dashboard-tx-primary-secondary dashboars-tx-p-s-bottom'>
        <div className='dashboard-tx-secondary-details'>by @<b>username.goes.here</b></div>
        <div className='dashboard-tx-secondary-time'><b>Completed</b>  1 hr ago</div>
      </div>
    </div>
  </div>
)

const temporaryBlock = (
  <div className='dashboard-block-container'>
    <div className='dashboard-block' />
  </div>
)

function numberWithCommas (value: number) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export default Dashboard

// Sent: 125 Ⓝ  to @jake.near
// by @username.goes.here
// 69a3a68...
// Completed  1 hr ago
