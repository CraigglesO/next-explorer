// @flow
/** Modules **/
import React, { Component } from 'react'

/** Assets **/
import footerLogo from '../../assets/images/near-footer-logo.svg'
import nearCat from '../../assets/images/nearkat-brown-hang.svg'

/** Stylesheets **/
import './footer.css'

/** Types **/
type State = {}
type Props = {}

class Footer extends Component<Props, State> {
  state: State
  props: Props
  render () {
    return (
      <div className='footer'>
        <div className='footer-container'>

          {/* Left Side */}
          <div id='footer-left'>
            <img id='footer-company-logo' src={footerLogo} alt='footer-logo' />
            <div id='footer-company-details'>
              <div id='footer-company-rights'>© 2019 NEAR Inc. All Rights Reserved.</div>
              <div id='footer-links-container'>
                <a target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/watch?v=WkVvG4QTO9M' className='footer-link'>Terms of Service</a>
                <span id='footer-links-splitter'>|</span>
                <a target='_blank' rel='noopener noreferrer' href='https://duckduckgo.com' className='footer-link'>Privacy Policy</a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div id='footer-right'>
            <div id='footer-contact-container'>
              <div id='footer-contact-text-container'>
                <div>Need Help?</div>
                <div id='footer-contact-support'>Contact Support</div>
              </div>
              <img id='footer-nearkat' src={nearCat} alt='footer-nearkat' />
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Footer
