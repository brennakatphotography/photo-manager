import { RECEIVE_FOLDER_DETAILS } from '../consts/actionTypes';

export default (state = null, { type, folder, oldId }) => {
  switch (type) {
    case RECEIVE_FOLDER_DETAILS:
      return oldId === folder.id ? null : folder;
    default:
      return state;
  }
}