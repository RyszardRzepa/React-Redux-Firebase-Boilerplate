import { GET_USER_INFO } from '../actions/types';

const INITIAL_STATE = {
  userName: ''
}
export default function userData(state = INITIAL_STATE, action) {
  switch (action.payload) {
    case GET_USER_INFO:
      return { ...state, userName: action.username}
    default:
      return state;
  }
}
