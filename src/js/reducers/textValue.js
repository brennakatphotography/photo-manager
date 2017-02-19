import {
  CANCEL_EDIT_TEXT,
  EDIT_TEXT,
  EDIT_INPUT_BOX,
  UPDATE_TEXT
} from '../consts/actionTypes';

export default (state = '', { type, value }) => {
  switch (type) {
    case CANCEL_EDIT_TEXT:
    case UPDATE_TEXT:
      return '';
    case EDIT_TEXT:
    case EDIT_INPUT_BOX:
      return value;
    default:
      return state;
  }
};
