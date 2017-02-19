import ajax from '../utils/ajax';
import { allFolders } from '../consts/urls';
import { ASYNC_GET_FOLDERS, RECEIVE_ALL_FOLDERS } from '../consts/actionTypes.js';

export const getAllFolders = () => dispatch => {
  dispatch(gettingFolders());
  return ajax(dispatch).get(allFolders()).then(({ data, messages }) => {
    dispatch(receiveAllFolders(data, messages));
  });
};

export const receiveAllFolders = (folders, messages) => ({
  type: RECEIVE_ALL_FOLDERS,
  folders,
  messages
});

export const gettingFolders = () => ({
  type: ASYNC_GET_FOLDERS
});