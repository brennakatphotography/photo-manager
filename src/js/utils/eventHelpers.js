import { DISPLAY_CONTEXT_MENU, HIDE_CONTEXT_MENU } from '../consts/actionTypes';

export const focusToEnd = ({ target }) => {
  let value = target.value;
  target.value = '';
  target.value = value;
};

export const handleEvent = fn => event => {
  event.preventDefault();
  return fn(event);
};

export const hideContextMenu = () => ({
  type: HIDE_CONTEXT_MENU
});