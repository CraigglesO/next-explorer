// @flow
/** Modules **/
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/** Assets **/
import logo from '../../assets/images/explorer-logo.png'
import logoSmall from '../../assets/images/near-icon-sm.png'
import blocksIcon from '../../assets/images/icon-blocks.svg'
import contractsIcon from '../../assets/images/icon-contract.svg'
import nodesIcon from '../../assets/images/icon-nodes.svg'
import transactionsIcon from '../../assets/images/icon-transactions.svg'
import githubIcon from '../../assets/images/icon-github.svg'
import helpIcon from '../../assets/images/icon-help.svg'
import downArrow from '../../assets/images/down-arrow.svg'

/** Stylesheets **/
import './navigation.css'
import './naviDropdown.css'

/** Types **/
type State = { width: number }
type Props = {}
type DropdownState = { open: bool }
type DropdownProps = { width: number }

class Navigation extends Component<Props, State> {
  state: State
  props: Props
  resize: Function
  constructor () {
    super()
    this.state = { width: 2000 }
  }

  componentDidMount () {
    this.resize()
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount () { window.removeEventListener('resize', this.resize) }

  resize = () => { this.setState({ width: window.innerWidth }) }

  render () {
    const { width } = this.state
    return (
      <div className='navigation'>

        {/* Left Side - Nav */}
        <div id='navi-left-container'>
          {/* Logo - Nav */}
          <Link to='/'>
            {
              (width < 650)
                ? <img id='navi-explorer-logo' src={logoSmall} alt='explorer-logo' />
                : <img id='navi-explorer-logo' src={logo} alt='explorer-logo' />
            }
          </Link>
          {/* Contracts - Nav */}
          <div id='navi-link-contracts'>
            <Link to='/contracts' className='navi-link'>
              <img className='navi-link-img' src={contractsIcon} alt='contract' />
              <div className='navi-link-text'>Contracts</div>
            </Link>
          </div>
          {/* Transactions - Nav */}
          <div id='navi-link-transactions'>
            <Link to='/transactions' className='navi-link'>
              <img className='navi-link-img' src={transactionsIcon} alt='transactions' />
              <div className='navi-link-text'>Transactions</div>
            </Link>
          </div>
          {/* Blocks - Nav */}
          <div id='navi-link-blocks'>
            <Link to='/blocks' className='navi-link'>
              <img className='navi-link-img' src={blocksIcon} alt='blocks' />
              <div className='navi-link-text'>Blocks</div>
            </Link>
          </div>
          {/* Nodes - Nav */}
          <div id='navi-link-nodes'>
            <Link to='/nodes' className='navi-link'>
              <img className='navi-link-img' src={nodesIcon} alt='nodes' />
              <div className='navi-link-text'>Nodes</div>
            </Link>
          </div>
        </div>

        {/* Right Side - Nav */}
        <div id='navi-right-container'>
          {/* Dropdown - Nav */}
          <NaviDropdown width={width} />

          <div id='navi-divider' />

          {/* Issues - Nav */}
          <div id='navi-link-github'>
            <a className='navi-link' target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/watch?v=MQEEJ57Gsow'>
              <img className='navi-link-img' src={githubIcon} alt='issues' />
              <div className='navi-link-text'>Issues</div>
            </a>
          </div>
          {/* Help - Nav */}
          <div id='navi-link-help'>
            <a className='navi-link' target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/watch?v=Oqa9tKarkNA'>
              <img className='navi-link-img' src={helpIcon} alt='help' />
              <div className='navi-link-text'>Help</div>
            </a>
          </div>
        </div>

      </div>
    )
  }
}

class NaviDropdown extends Component<DropdownProps, DropdownState> {
  state: DropdownState
  props: DropdownProps
  constructor () {
    super()
    this.state = { open: false }
  }

  openClose = () => { this.setState({ open: !this.state.open }) }

  render () {
    const { open } = this.state
    const { width } = this.props
    let dropList = null

    if (open) {
      dropList = []
      // push network lists
      dropList.push(createDropdownLink('testnet two', nodesIcon, 'https://www.youtube.com/watch?v=MQEEJ57Gsow'))
      if (width < 1300) {
        // push a divider, issues, help
        dropList.push(<div key='divider-1' className='navi-dropdown-divider' />)
        dropList.push(createDropdownLink('issues', githubIcon, 'https://www.youtube.com/watch?v=MQEEJ57Gsow'))
        dropList.push(createDropdownLink('help', helpIcon, 'https://www.youtube.com/watch?v=Oqa9tKarkNA'))
      }
      if (width < 1150) {
        dropList.push(<div key='divider-2' className='navi-dropdown-divider' />)
        dropList.push(createDropdownLink('nodes', nodesIcon))
      }
      if (width < 1025) dropList.push(createDropdownLink('blocks', blocksIcon))
      if (width < 885) dropList.push(createDropdownLink('transactions', transactionsIcon))
      if (width < 700) dropList.push(createDropdownLink('contracts', contractsIcon))
    }

    return (
      <div className='navi-link' id='navi-net' onClick={this.openClose}>
        <div id='navi-net-subcontainer'>
          <img className='navi-link-img' src={nodesIcon} alt='network options' />
          <div className='navi-link-text'>Testnet One</div>
        </div>
        <div>
          <img className={'navi-dropdown-arrow' + ((open) ? ' navi-dropdown-arrow-up' : '')} src={downArrow} alt='down arrow' />
        </div>

        {open && <div id='navi-dropdown-container'><div id='navi-dropdown-container-arrow' />{dropList}</div>}
      </div>
    )
  }
}

function createDropdownLink (link: string, image: any, aLink?: string) {
  if (aLink) {
    return (
      <div key={link} className='navi-link-dropdown-element'>
        <a target='_blank' rel='noopener noreferrer' href={aLink}>
          <img className='navi-link-img-dropdown' src={image} alt={`${link} dropdown`} />
          <div className='navi-link-text navi-link-text-dropdown'>{link}</div>
        </a>
      </div>
    )
  }
  return (
    <div key={link} className='navi-link-dropdown-element'>
      <Link to={`/${link}`}>
        <img className='navi-link-img-dropdown' src={image} alt='blocks' />
        <div className='navi-link-text navi-link-text-dropdown'>{link}</div>
      </Link>
    </div>
  )
}

export default Navigation
