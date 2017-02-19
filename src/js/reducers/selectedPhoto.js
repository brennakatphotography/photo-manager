import { RECEIVE_FOLDER_PHOTOS, SELECT_PHOTO } from '../consts/actionTypes';
import { getIn } from 'fun-util';

export default (state = null, { type, photo, photos }) => {
  switch (type) {
    case SELECT_PHOTO:
      return getIn(state, 'id') === getIn(photo, 'id') ? null : photo;
    case RECEIVE_FOLDER_PHOTOS:
      return state && update(state, photos);
    default:
      return state;
  }
};

const update = (photo, photos) => {
  const updatedPhoto = photos.find(updatedPhoto => {
    return getIn(updatedPhoto, 'id') === getIn(photo, 'id')
  });
  if (updatedPhoto) {
    return { ...photo, ...updatedPhoto };
  }
  return photo;
}