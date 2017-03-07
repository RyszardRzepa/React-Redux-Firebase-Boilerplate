import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_START,
  LOGIN_USER_FAIL
} from '../../actions/types';

const INITIAL_STATE = {
  isLoading: false,
  err: '',
  message: '',
  email: '',
  password: ''
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        ...INITIAL_STATE
      };
    case LOGIN_USER_START:
      return { isLoading: true };
    case LOGIN_USER_FAIL:
      return { ...state, isLoading: false, err: action.err };
    default:
      return state;
  }
}
