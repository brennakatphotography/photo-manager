import React, { Component } from 'react';
import { connectDispatch } from '../../utils/connectStore';
import { startEdit } from '../../actions/editField';
import { updatePhoto } from '../../actions/photoDetails';
import { photoDetail } from '../../utils/menuHelpers';
import EditableField from '../form/EditableField';

class PhotoDescription extends Component {
  constructor(props) {
    super(props);
    this._TYPE = 'PHOTO';
    this._FIELD = 'DESCRIPTION';
  }

  render() {
    const { editing, folderId, photo, textValue } = this.props;
    return (
      <EditableField
        editing={editing}
        TYPE={this._TYPE}
        FIELD={this._FIELD}
        item={photo}
        className="photo-details photo-details-description"
        inputId={`photo-description-${photo.id}`}
        inputClass="photo-input photo-description-input"
        textValue={textValue}
        submit={updatePhoto(photo, { description: textValue }, folderId)}
        label="Description"
        value={photo.description}
        menu={photoDetail(() => startEdit(this._TYPE, this._FIELD, photo.id, photo.description))}
      />
    );
  }
}

export default connectDispatch(PhotoDescription);
