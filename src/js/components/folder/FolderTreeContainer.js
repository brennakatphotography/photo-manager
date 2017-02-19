import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connectDispatch } from '../../utils/connectStore';
import FolderTree from './FolderTree';
import { getAllFolders } from '../../actions/folderTree';

class FolderTreeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getAllFolders()).then(() => {
      if (!this.props.authenticated) {
        browserHistory.push('/login');
      }
    });
  }

  render() {
    const { editing, folders, photos, selectedPhoto, textValue } = this.props;
    return (
      <div>
        <h2>Folder Tree</h2>
        <FolderTree
          editing={editing}
          folders={folders.map(folder => ({...folder, locked: true}))}
          photos={photos}
          selectedPhoto={selectedPhoto}
          textValue={textValue} />
      </div>
    );
  }
}

export default connectDispatch(FolderTreeContainer);
