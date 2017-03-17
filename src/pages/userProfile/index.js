import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserProfile from '../../components/UserProfile';
import Layout from '../../components/Layout';
import { getUserInfo } from '../../actions/userActions';

class User_Profile extends Component {

  render() {
    const { user } = this.props;
    if (!user) {
      return <div>
        <h2>You are not auhtenticated to see this page. Please login..
          link to the login page</h2>
      </div>
    }

    return (
      <div>
        <UserProfile user={user}/>
      </div>
    )
  }
}

UserProfile.propTypes = {
  user: React.PropTypes.object,
};


function mapStateToProps(state) {
  return {
    user: state.auth.user,
    userId: state.auth.user.uid,
  }

}

export default connect(mapStateToProps, { getUserInfo })(User_Profile);
