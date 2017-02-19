import React, { Component } from 'react';
import PhotoName from './PhotoName';
import PhotoDescription from './PhotoDescription';
import { connectDispatch } from '../../utils/connectStore';
import { image } from '../../consts/urls';
import { map } from 'fun-util';

class PhotoDetails extends Component {
  render() {
    const { activeFolderId, editing, photo, textValue } = this.props;
    if (photo) {
      return (
        <div>
          <PhotoName
            folderId={activeFolderId}
            photo={photo}
            editing={editing}
            textValue={textValue} />
          <img src={image(this.props.photo.id)} />
          <PhotoDescription
            folderId={activeFolderId}
            photo={photo}
            editing={editing}
            textValue={textValue} />
        </div>
      );
    }
    return <div />;
  }
}

export default connectDispatch(PhotoDetails);
