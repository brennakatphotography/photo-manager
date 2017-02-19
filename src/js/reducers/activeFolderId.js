import { SELECT_PHOTO } from '../consts/actionTypes';

export default (state = null, { type, folderId }) => {
  switch (type) {
    case SELECT_PHOTO:
      return folderId;
    default:
      return state;
  }
};