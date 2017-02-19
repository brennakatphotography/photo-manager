import { DISPLAY_CONTEXT_MENU } from '../../consts/actionTypes';

export default (state = [], { type, actions }) => {
  switch (type) {
    case DISPLAY_CONTEXT_MENU:
      return actions;
    default:
      return state;
  }
};
