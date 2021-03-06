import React, { Component } from 'react';
import { connectDispatch } from '../../utils/connectStore';
import { startEdit } from '../../actions/editField';
import { updatePhoto } from '../../actions/photoDetails';
import { photoDetail } from '../../utils/menuHelpers';
import EditableField from '../form/EditableField';

class PhotoName extends Component {
  constructor(props) {
    super(props);
    this._TYPE = 'PHOTO';
    this._FIELD = 'NAME';
  }

  render() {
    const { dispatch, editing, folderId, photo, textValue } = this.props;
    return (
      <EditableField
        editing={editing}
        TYPE={this._TYPE}
        FIELD={this._FIELD}
        item={photo}
        className="photo-details photo-details-name"
        inputId={`photo-name-${photo.id}`}
        inputClass="photo-input photo-name-input"
        textValue={textValue}
        submit={updatePhoto(photo, { name: textValue }, folderId)}
        label="Name"
        value={photo.name}
        menu={photoDetail(() => startEdit(this._TYPE, this._FIELD, photo.id, photo.name))}
      />
    );
  }
}

export default connectDispatch(PhotoName);
