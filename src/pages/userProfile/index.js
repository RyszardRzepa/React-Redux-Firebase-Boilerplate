import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserProfile from '../../components/UserProfile';
import Layout from '../../components/Layout';

class User_Profile extends Component {

  render() {
    const { user, authenticated } = this.props;
    if (authenticated) {
      return <UserProfile user={user} />
    }
    return (
      <Layout>
        <div>
          <h2>You are not auhtenticated to see this page. Please login..
            link to the login page</h2>
        </div>
      </Layout>
    )
  }
}

UserProfile.propTypes = {
  user: React.PropTypes.object,
  authenticated: React.PropTypes.bool
};


function mapStateToProps(state) {
  return {
    authenticated: state.auth.isAuth,
    user: state.auth.user
  }

}

export default connect(mapStateToProps)(User_Profile);
