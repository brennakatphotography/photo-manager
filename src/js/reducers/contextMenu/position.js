import { DISPLAY_CONTEXT_MENU } from '../../consts/actionTypes';

export default (state = { x: 0, y: 0 }, { type, position }) => {
  switch (type) {
    case DISPLAY_CONTEXT_MENU:
      return position;
    default:
      return state;
  }
};
