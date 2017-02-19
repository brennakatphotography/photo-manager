import activeFolderId from './activeFolderId';
import authenticated from './authenticated';
import contextMenu from './contextMenu/root';
import editing from './editing';
import folderDetails from './folderDetails';
import folderPhotos from './folderPhotos';
import folderTree from './folderTree';
import photos from './photos';
import selectedPhoto from './selectedPhoto';
import textValue from './textValue';

export default {
  activeFolderId,
  authenticated,
  contextMenu,
  editing,
  env: window.getEnv,
  folderDetails,
  folderPhotos,
  folderTree,
  photos,
  selectedPhoto,
  textValue
};