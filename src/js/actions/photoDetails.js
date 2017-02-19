import {
  ASYNC_UPDATE_PHOTO,
  FAIL_UPDATE_PHOTO,
  SELECT_PHOTO,
  SUCCEED_UPDATE_PHOTO
} from '../consts/actionTypes';
import ajax from '../utils/ajax';
import { photoById } from '../consts/urls';
import { getFolderPhotos } from './folderDetails';

export const setActivePhoto = (photo, folderId) => ({
  type: SELECT_PHOTO,
  folderId,
  photo
});

export const updatePhoto = (photo, updates, folderId) => dispatch => {
  dispatch({ type: ASYNC_UPDATE_PHOTO });
  return ajax(dispatch).patch(photoById(photo.id), updates)
    .then(() => dispatch({ type: SUCCEED_UPDATE_PHOTO }))
    .catch(() => dispatch({ type: FAIL_UPDATE_PHOTO }))
    .then(() => dispatch(getFolderPhotos(folderId)));
};
