import React, { Component } from 'react';
import { connectDispatch } from '../../utils/connectStore';
import { getFolderDetails } from '../../actions/folderDetails';
import FolderName from './FolderName';
import FolderTree from './FolderTree';
import PhotoList from '../photo/PhotoList';
import { handleEvent } from '../../utils/eventHelpers';
import { getIn } from 'fun-util';
import { getFolderPhotos } from '../../actions/folderDetails';

class Folder extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  render() {
    const { folder } = this.props;
    return (
      <li>
        <FolderName
          expanded={this.state.expanded}
          folder={folder}
          onClick={() => this._flipExpanded()}/>
        {this.renderTree()}
        {this.renderPhotos()}
      </li>
    );
  }

  renderTree() {
    const { folder, photos, selectedPhoto } = this.props;
    if (this.state.expanded) {
      return (
        <FolderTree
          folders={folder.sub_folders}
          photos={photos}
          selectedPhoto={selectedPhoto} />
      );
    }
  }

  renderPhotos() {
    const { folder, photos, selectedPhoto } = this.props;
    const photoList = photos[folder.id] || [];
    if (this.state.expanded) {
      return (
        <PhotoList
          photos={photoList}
          folderId={folder.id}
          selectedPhoto={selectedPhoto} />
      );
    }
  }

  _flipExpanded() {
    const { dispatch, folder } = this.props;
    dispatch(getFolderPhotos(folder.id));
    this.setState({ expanded: !this.state.expanded });
  }
}

const fetchDetails = ({ dispatch, folder }) => {
  dispatch(getFolderDetails(folder.id));
};

export default connectDispatch(Folder);
