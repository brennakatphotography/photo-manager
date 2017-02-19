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
    const { folders, photos, selectedPhoto } = this.props;
    return (
      <div>
        <h2>Folder Tree</h2>
        <FolderTree
          folders={folders}
          photos={photos}
          selectedPhoto={selectedPhoto} />
      </div>
    );
  }
}

export default connectDispatch(FolderTreeContainer);
