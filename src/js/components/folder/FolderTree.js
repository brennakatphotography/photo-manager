import React, { Component } from 'react';
import Folder from './Folder';
import { connectDispatch } from '../../utils/connectStore';

class FolderTree extends Component {
  render() {
    const { editing, folders, photos, selectedPhoto, textValue } = this.props;
    return (
      <ul>
        {folders.map((folder, key) => (
          <Folder
            key={key}
            editing={editing}
            folder={folder}
            photos={photos}
            selectedPhoto={selectedPhoto}
            textValue={textValue} />
        ))}
      </ul>
    );
  }
}

export default connectDispatch(FolderTree);
