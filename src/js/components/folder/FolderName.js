import React, { Component } from 'react';
import { connectDispatch } from '../../utils/connectStore';
import { handleEvent } from '../../utils/eventHelpers';
import { getIn } from 'fun-util';

class FolderName extends Component {
  render() {
    const { folder, onClick } = this.props;
    return (
      <div onClick={handleEvent(() => onClick())}>
        <i className={determineIcon(this.props)} />
        <span className="folder">
          {folder.name}
        </span>
      </div>
    );
  }
}

const determineIcon = ({ expanded }) => {
  return `fa--spacer fa fa-caret-${expanded ? 'up' : 'down'}`;
};

export default connectDispatch(FolderName);
