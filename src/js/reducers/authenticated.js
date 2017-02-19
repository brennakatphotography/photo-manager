import { RECEIVE_MESSAGES } from '../consts/actionTypes';

export default (state = false, { type, messages }) => {
  switch (type) {
    case RECEIVE_MESSAGES:
      return !!messages.authenticated
    default:
      return state;
  }
};