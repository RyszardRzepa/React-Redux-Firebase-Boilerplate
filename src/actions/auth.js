import firebase from 'firebase';
import history from '../history';

import { LOGIN_USER_START, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, LOGOUT_USER } from './types';

export function loginUser(email, password) {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_START });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch(loginUserSuccess(user));
      localStorage.setItem('userEmail', user.email);
    })
    .then(() => {
      firebase.auth().currentUser.getToken()
      .then((idToken) => localStorage.setItem('token', idToken))
    })
    .then(() => history.push('/profile'))
    .catch(function (error) {
      dispatch(loginUserFail("error during login"))
      console.log(error)
    });
  }
}

export function createUser(email, password) {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_START });

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => dispatch(loginUserSuccess(user)))
    .catch(function (error) {
      dispatch(loginUserFail("error during registering"))
      console.log(error)
    });
  }
}

export function logoutUser() {
  return (dispatch) => {
    firebase.auth().signOut()
    .then(() => {
      dispatch({ type: LOGOUT_USER });
      localStorage.clear();
    })
    .then(() => history.push('/'))
  }
}

const loginUserSuccess = (user) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user
  }
}

const loginUserFail = (err) => {
  return {
    type: LOGIN_USER_FAIL,
    payload: err
  }
}
