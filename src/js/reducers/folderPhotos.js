import { RECEIVE_FOLDER_DETAILS } from '../consts/actionTypes';

export default (state = [], { type, folder, oldId }) => {
  switch (type) {
    case RECEIVE_FOLDER_DETAILS:
      return oldId === folder.id ? [] : folder.photos;
    default:
      return state;
  }
};