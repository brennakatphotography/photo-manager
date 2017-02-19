import { RECEIVE_ALL_FOLDERS } from '../consts/actionTypes.js';

export default (state = [], { type, folders }) => {
  switch (type) {
    case RECEIVE_ALL_FOLDERS:
      return folders;
    default:
      return state;
  }
};