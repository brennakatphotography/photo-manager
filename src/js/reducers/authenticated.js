import { RECEIVE_MESSAGES } from '../consts/actionTypes';
import { getIn } from 'fun-util';

export default (state = false, { type, messages }) => {
  switch (type) {
    case RECEIVE_MESSAGES:
      const role = getIn(messages, 'authenticated', 'role');
      return ['admin', 'power-user'].includes(role);
    default:
      return state;
  }
};