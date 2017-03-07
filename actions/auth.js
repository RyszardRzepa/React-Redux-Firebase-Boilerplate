import firebase from 'firebase';
import { LOGIN_USER_START, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS } from './types';

export function loginUser(email, password) {
 return (dispatch) => {
    dispatch({ type: LOGIN_USER_START });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => dispatch(loginUserSuccess(user)))
    .catch(function(error) {
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
    .catch(function(error) {
      dispatch(loginUserFail("error during registering"))
      console.log(error)
    });
  }

}

const loginUserSuccess = (user)  => {
  return {
    type: LOGIN_USER_SUCCESS,
    user
  }
}

const loginUserFail = (err) => {
  return {
    type: LOGIN_USER_FAIL,
    err
  }
}
