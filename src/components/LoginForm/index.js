import React, { Component } from 'react'
import { Field, reduxForm, reset } from 'redux-form'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

import Link from '../Link/Link';
import asyncValidate from './asyncValidate';

const validate = values => {

  const errors = {}
  const requiredFields = ['firstName', 'email']
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField
    fullWidth={true}
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

class MaterialUiForm extends Component {

  renderLoader() {
    if (this.props.loading) {
      return <div
        style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <CircularProgress />
      </div>
    }

    return <div>
      <RaisedButton
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 20
        }} type="submit" label="Login" primary={true}
      />
    </div>
  }

  render() {
    const { handleSubmit, onSubmit, authButton } = this.props;
    return (
      <form onSubmit={handleSubmit(({ email, password }) => onSubmit(email, password))}>
        <div>
          <Field name="email" component={renderTextField} label="Email"/>
        </div>
        <div>
          <Field name="password" type="password" component={renderTextField} label="Password"/>
        </div>
        {this.renderLoader()}
        <div style={{ paddingTop: 20 }}>
          <Link style={{ fontSize: 13 }} to={`/${authButton}`}>{authButton}</Link>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'MaterialUiForm',  // a unique identifier for this form
  validate,
  asyncValidate
})(MaterialUiForm)
