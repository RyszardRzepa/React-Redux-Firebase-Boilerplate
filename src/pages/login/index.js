import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/auth';
import Layout from '../../components/Layout';
import styles from './styles';
import LoginForm from '../../components/loginForm';
import { Card } from 'material-ui/Card';

class Login extends React.Component {

  handleSubmit = (email, password) => {
    this.props.loginUser(email, password);
  };

  render() {
    return (
      <Layout>
        <div style={styles}>
          <Card
            style={styles.card}
            zDepth={3}
          >
            <LoginForm authButton="register" loading={this.props.isLoading} onSubmit={this.handleSubmit.bind(this)}/>
          </Card>
        </div>
      </Layout>
    );
  }
}

Login.propTypes = {
  isLoading: React.PropTypes.bool
};


function mapStateToProps(state) {
  return {
    isLoading: state.auth.isLoading,
  }
}

export default connect(mapStateToProps,  actions)(Login);
