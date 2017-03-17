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
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import history from '../../history';
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
    if (!this.props.user) {
      return (
        <nav className="mdl-navigation" ref={node => (this.root = node)}>
          <Link className="mdl-navigation__link" to="/">Home</Link>
          <Link className="mdl-navigation__link" to="/login">Login</Link>
        </nav>
      )
    }

    const { logoutUser } = this.props;
    return (
      <nav className="mdl-navigation" ref={node => (this.root = node)}>
        <Link className="mdl-navigation__link" to="/">Home</Link>
        <Link onClick={() => logoutUser()} className="mdl-navigation__link" to="/">Logout</Link>
        <List>
          <ListItem
            onClick={() => history.push('/profile')}
            style={{ color: '#fff', paddingBottom: 10 }}
            leftAvatar={<Avatar
              src="https://scontent.fosl1-1.fna.fbcdn.net/v/t1.0-1/p160x160/13872659_1350373688323267_5528797744784155072_n.jpg?oh=0afa3ae7c85ca36a0c816d1c4c349c18&oe=596B9EBD"/>}
          />
        </List>
      </nav>
    )
  }

  render() {
    return (
      <nav className="mdl-navigation" ref={node => (this.root = node)}>
        {this.toggleLoginButton()}
      </nav>
    )
  }
}


Navigation.propTypes = {
  user: React.PropTypes.object,
  authenticated: React.PropTypes.bool
};


function mapStateToProps(state) {
  return {
    authenticated: state.auth.isAuth,
    user: state.auth.user
  }
}

export default connect(mapStateToProps, { logoutUser })(Navigation);
