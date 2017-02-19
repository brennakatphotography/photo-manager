import React, { Component } from 'react';
import { connectDispatch } from '../../utils/connectStore';
import { getFolderDetails } from '../../actions/folderDetails';
import FolderName from './FolderName';
import FolderTree from './FolderTree';
import PhotoList from '../photo/PhotoList';
import EditableField from '../form/EditableField';
import { handleEvent } from '../../utils/eventHelpers';
import { getIn } from 'fun-util';
import { getFolderPhotos } from '../../actions/folderDetails';
import { createFolder } from '../../actions/folderDetails';

class Folder extends Component {
  constructor(props) {
    super(props);
    this._TYPE = 'NEW_FOLDER';
    this._FIELD = 'NAME';
    this.state = { expanded: false };
  }

  componentWillReceiveProps(newProps) {
    if (isAddingSubFolder(newProps, this._TYPE, this._FIELD) && !this.state.expanded) {
      this._flipExpanded();
    }
  }

  render() {
    const { editing, folder, textValue } = this.props;
    return (
      <li>
        <FolderName
          editing={editing}
          expanded={this.state.expanded}
          folder={folder}
          textValue={textValue}
          onClick={() => this._flipExpanded()} />
        {this.renderNewFolder()}
        {this.renderTree()}
        {this.renderPhotos()}
      </li>
    );
  }

  renderTree() {
    const { editing, folder, photos, selectedPhoto, textValue } = this.props;
    if (this.state.expanded) {
      return (
        <FolderTree
          editing={editing}
          folders={folder.sub_folders}
          photos={photos}
          selectedPhoto={selectedPhoto}
          textValue={textValue} />
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

  renderNewFolder() {
    const { editing, folder, textValue } = this.props;
    if (isAddingSubFolder({ editing, folder }, this._TYPE, this._FIELD)) {
      return (
        <EditableField
          editing={editing}
          TYPE={this._TYPE}
          FIELD={this._FIELD}
          item={editing}
          className="sub-folder sub-folder-name"
          inputId={`sub-folder-name-${folder.id}`}
          inputClass="sub-folder-input sub-folder-name-input"
          textValue={textValue}
          submit={createFolder(folder, textValue)} />
      );
    }
  }

  _flipExpanded() {
    const { dispatch, folder } = this.props;
    dispatch(getFolderPhotos(folder.id));
    this.setState({ expanded: !this.state.expanded });
  }
}

const isAddingSubFolder = ({ editing, folder }, TYPE, FIELD) => {
  return getIn(editing, 'id') === getIn(folder, 'id') && editing.type === TYPE && editing.field === FIELD;
}

const fetchDetails = ({ dispatch, folder }) => {
  dispatch(getFolderDetails(folder.id));
};

export default connectDispatch(Folder);
