import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

import { Card } from 'material-ui/Card';
import Layout from '../../components/Layout';
import styles from './styles';
import UserForm from '../../components/loginForm';

class Register extends React.Component {

  handleSubmit = (email, password) => {
    this.props.createUser(email, password)
  }

  render() {
    return (
      <Layout>
        <div style={styles}>
          <Card
            style={styles.card}
            zDepth={3}
          >
            <UserForm authButton="login" loading={this.props.isLoading} onSubmit={this.handleSubmit.bind(this)}/>
          </Card>
        </div>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.auth.isLoading,
  }
}

export default connect(mapStateToProps, actions)(Register);
