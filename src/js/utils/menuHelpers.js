import { DISPLAY_CONTEXT_MENU } from '../consts/actionTypes';
import { handleEvent } from './eventHelpers';
import { map } from 'fun-util';

export const photoName = ([edit]) => dispatch => {
  return buildMenu(dispatch, options(['Edit'], [edit], dispatch));
};

export const buildMenu = (dispatch, actions) => handleEvent(event => {
  const { pageX: x, pageY: y } = event;
  dispatch({ type: DISPLAY_CONTEXT_MENU, actions, position: { x, y } });
});

const options = (texts, actions, dispatch) => {
  return map(texts, actions, (text, action) => ({
    action: () => dispatch(action()),
    text
  }));
};
