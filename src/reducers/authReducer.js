import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_START,
  LOGIN_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  isLoading: false,
  err: '',
  message: '',
  user: {},
  isAuth: false
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuth: true
      };
    case LOGIN_USER_START:
      return { isLoading: true };
    case LOGIN_USER_FAIL:
      return { ...state, isLoading: false, err: "error during login" };
    default:
      return state;
  }
}
