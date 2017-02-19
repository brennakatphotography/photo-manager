import React, { Component } from 'react';
import { connectAll } from '../utils/connectStore';
import FolderTreeContainer from './folder/FolderTreeContainer';
import PhotoDetails from './photo/PhotoDetails';
import PhotoList from './photo/PhotoList';

class Main extends Component {
  render() {
    const {
      activeFolderId, authenticated, editing, folderPhotos,
      folderTree, photos, selectedPhoto, textValue
    } = this.props;
    return (
      <div className="main">
        <FolderTreeContainer
          folders={folderTree}
          photos={photos}
          selectedPhoto={selectedPhoto}
          authenticated={authenticated} />
        <PhotoDetails
          photo={selectedPhoto}
          editing={editing}
          textValue={textValue}
          activeFolderId={activeFolderId} />
      </div>
    );
  }
}

export default connectAll(Main);
