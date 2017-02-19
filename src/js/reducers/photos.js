import { RECEIVE_FOLDER_PHOTOS } from '../consts/actionTypes';

export default (state = {}, { type, photos, id }) => {
  switch (type) {
    case RECEIVE_FOLDER_PHOTOS:
      return { ...state, [id]: photos };
    default:
      return state;
  }
};