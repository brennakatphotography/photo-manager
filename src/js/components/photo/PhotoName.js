import React, { Component } from 'react';
import { connectDispatch } from '../../utils/connectStore';
import { buildMenu, focusToEnd, handleEvent } from '../../utils/eventHelpers';
import { cancelEdit, startEdit, updateEdit } from '../../actions/editField';
import { updatePhoto } from '../../actions/photoDetails';
import { partial } from 'fun-util';
import { photoName } from '../../utils/menuHelpers';

const start = partial(startEdit, 'PHOTO', 'NAME');
const update = partial(updateEdit, 'PHOTO', 'NAME');

class PhotoName extends Component {
  render() {
    const { editing, photo } = this.props;
    if (!isEditing(editing, photo)) {
      return this.renderName();
    }
    return this.renderForm();
  }

  renderName() {
    const { dispatch, photo } = this.props;
    return (
      <div
        className="photo-details-name"
        onContextMenu={dispatch(photoName([() => start(photo.id, photo.name)]))}>
        Name: {photo.name}
      </div>
    );
  }

  renderForm() {
    const { folderId, dispatch, photo, textValue } = this.props;
    return (
      <form onSubmit={handleEvent(() => dispatch(updatePhoto(photo, { name: textValue }, folderId)))}>
        <label htmlFor={`photo-name-${photo.id}`}>Name: </label>
        <input
          className="photo-name-input"
          id={`photo-name-${photo.id}`}
          value={textValue}
          autoFocus={true}
          onFocus={focusToEnd}
          onKeyDown={({ key }) => key === 'Escape' && dispatch(cancelEdit())}
          onChange={({ target }) => dispatch(update(photo.id, target.value))}
          onBlur={() => dispatch(cancelEdit())} />
      </form>
    );
  }
}

const isEditing = (item, photo) => {
  return item.id === photo.id && item.type === 'PHOTO' && item.field === 'NAME';
};

export default connectDispatch(PhotoName);
