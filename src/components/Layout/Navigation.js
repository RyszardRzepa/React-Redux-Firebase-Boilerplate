/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logoutUser } from '../../actions/auth';
import Link from '../Link';

class Navigation extends Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  toggleLoginButton() {
    if (!this.props.authenticated) {
      return (
        <Link className="mdl-navigation__link" to="/login">Login</Link>
      )
    }
    return (
      <Link onClick={() => this.props.logoutUser()} className="mdl-navigation__link" to="/login">Logout</Link>
    )
  }

  render() {
    console.log(this.props.authenticated)
    return (
      <nav className="mdl-navigation" ref={node => (this.root = node)}>
        <Link className="mdl-navigation__link" to="/">Home</Link>
        {this.toggleLoginButton()}
      </nav>
    )
  }

}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.isAuth
  }
}

export default connect(mapStateToProps, { logoutUser })(Navigation);
