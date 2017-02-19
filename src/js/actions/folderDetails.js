import ajax from '../utils/ajax';
import { folderById } from '../consts/urls';
import { RECEIVE_FOLDER_DETAILS, RECEIVE_FOLDER_PHOTOS } from '../consts/actionTypes';

export const getFolderDetails = id => dispatch => {
  return ajax(dispatch).get(folderById(id)).then(({ data, messages }) => {
    dispatch(receiveFolderDetails(data, messages));
  });
};

export const getFolderPhotos = id => dispatch => {
  return ajax(dispatch).get(folderById(id)).then(({ data, messages }) => {
    dispatch(receiveFolderPhotos(id, data.photos, messages));
  });
};

export const receiveFolderDetails = (folder, messages, oldId) => ({
  type: RECEIVE_FOLDER_DETAILS,
  folder,
  messages,
  oldId
});

export const receiveFolderPhotos = (id, photos, messages) => ({
  type: RECEIVE_FOLDER_PHOTOS,
  photos,
  messages,
  id
});
