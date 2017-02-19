import { DISPLAY_CONTEXT_MENU, HIDE_CONTEXT_MENU } from '../../consts/actionTypes';

export default (state = false, { type }) => {
  switch (type) {
    case DISPLAY_CONTEXT_MENU:
      return true;
    case HIDE_CONTEXT_MENU:
      return false;
    default:
      return state;
  }
};