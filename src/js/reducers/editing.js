import {
  ASYNC_UPDATE_FOLDER,
  ASYNC_UPDATE_PHOTO,
  CANCEL_EDIT_TEXT,
  EDIT_TEXT,
  UPDATE_TEXT
} from '../consts/actionTypes';

export default (state = {}, { type, item }) => {
  switch (type) {
    case ASYNC_UPDATE_FOLDER:
    case ASYNC_UPDATE_PHOTO:
    case CANCEL_EDIT_TEXT:
    case UPDATE_TEXT:
      return {};
    case EDIT_TEXT:
      return item;
    default:
      return state;
  }
};
