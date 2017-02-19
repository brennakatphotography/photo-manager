import React, { Component } from 'react';
import Folder from './Folder';
import { connectDispatch } from '../../utils/connectStore';

class FolderTree extends Component {
  render() {
    const { folders, photos, selectedPhoto } = this.props;
    return (
      <ul>
        {folders.map((folder, key) => (
          <Folder
            key={key}
            folder={folder}
            photos={photos}
            selectedPhoto={selectedPhoto} />
        ))}
      </ul>
    );
  }
}

export default connectDispatch(FolderTree);
