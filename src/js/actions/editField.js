import {
  CANCEL_EDIT_TEXT,
  EDIT_TEXT,
  EDIT_INPUT_BOX
} from '../consts/actionTypes';

export const cancelEdit = () => ({
  type: CANCEL_EDIT_TEXT
});

export const startEdit = (type, field, id, value) => ({
  type: EDIT_TEXT,
  item: { id, type, field },
  value
});

export const updateEdit = (type, field, id, value) => ({
  type: EDIT_INPUT_BOX,
  item: { id, type, field },
  value
});
