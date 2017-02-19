import React, { Component } from 'react';
import { connectDispatch } from '../../utils/connectStore';
import { handleEvent } from '../../utils/eventHelpers';
import { setActivePhoto } from '../../actions/photoDetails';
import { getIn } from 'fun-util';

class PhotoItem extends Component {
  render() {
    return (
      <li
        onClick={handleEvent(() => clickPhoto(this.props))}
        className={determineItemClassName(this.props)}>
        <span className="photo-name">{this.props.photo.name}</span>
      </li>
    );
  }
}

const clickPhoto = ({ photo, dispatch, folderId }) => {
  dispatch(setActivePhoto(photo, folderId));
};

const compareIds = ({ photo, selectedPhoto }) => {
  return getIn(photo, 'id') === getIn(selectedPhoto, 'id');
};

const determineItemClassName = props => {
  return `photo ${compareIds(props) ? ' photo--selected' : ''}`;
};

export default connectDispatch(PhotoItem);