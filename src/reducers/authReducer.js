import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_START,
  LOGIN_USER_FAIL,
  LOGOUT_USER
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
      };
    case LOGIN_USER_START:
      return { isLoading: true };
    case LOGIN_USER_FAIL:
      return { ...state, isLoading: false, err: "error during login" };
    case LOGOUT_USER:
      return { INITIAL_STATE };
    default:
      return state;
  }
}
