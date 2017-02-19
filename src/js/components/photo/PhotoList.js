import React, { Component } from 'react';
import { connectDispatch } from '../../utils/connectStore';
import PhotoItem from './PhotoItem';

class PhotoList extends Component {
  render() {
    const { photos, selectedPhoto, folderId } = this.props;
    return (
      <ul>
        {photos.map((photo, key) => (
          <PhotoItem key={key} folderId={folderId} photo={photo} selectedPhoto={selectedPhoto} />
        ))}
      </ul>
    );
  }
}

export default connectDispatch(PhotoList);
