import ajax from '../utils/ajax';
import { allFolders, folderById } from '../consts/urls';
import {
  ASYNC_CREATE_FOLDER,
  ASYNC_UPDATE_FOLDER,
  FAIL_CREATE_FOLDER,
  FAIL_UPDATE_FOLDER,
  RECEIVE_FOLDER_DETAILS,
  RECEIVE_FOLDER_PHOTOS,
  SUCCEED_CREATE_FOLDER,
  SUCCEED_UPDATE_FOLDER
} from '../consts/actionTypes';
import { getAllFolders } from './folderTree';

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

export const updateFolder = ({ id }, updates) => dispatch => {
  dispatch({ type: ASYNC_UPDATE_FOLDER });
  return ajax(dispatch).patch(folderById(id), updates)
    .then(() => dispatch({ type: SUCCEED_UPDATE_FOLDER }))
    .catch(() => dispatch({ type: FAIL_UPDATE_FOLDER }))
    .then(() => dispatch(getAllFolders()));
};

export const createFolder = (parentFolder, name) => dispatch => {
  dispatch({ type: ASYNC_CREATE_FOLDER });
  return ajax(dispatch).post(allFolders(), newFolder(parentFolder.id, name))
    .then(() => dispatch({ type: SUCCEED_CREATE_FOLDER }))
    .catch(() => dispatch({ type: FAIL_CREATE_FOLDER }))
    .then(() => dispatch(getAllFolders()));
};

const newFolder = (parent_folder_id, name, description = '') => ({
  description,
  name,
  parent_folder_id
});
