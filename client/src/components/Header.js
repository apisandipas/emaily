import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Payments from './Payments'

class Header extends Component {
  renderContent () {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return <li><a href='/auth/google'>Login With Google</a></li>
      default:
        return [
          <li key={0}><Payments /></li>,
          <li key={2} style={{ margin: '0 10px 0 20px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key={1}><a href='/api/logout'>Log out</a></li>
        ]
    }
  }
  render () {
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className='brand-logo'
          >
            Emaily
          </Link>
          <ul id='nav-mobile' className='right'>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
