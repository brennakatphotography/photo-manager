import React, { Component } from 'react';
import EditableField from '../form/EditableField';
import { connectDispatch } from '../../utils/connectStore';
import { handleEvent } from '../../utils/eventHelpers';
import { getIn } from 'fun-util';
import { updateFolder } from '../../actions/folderDetails';
import { startEdit } from '../../actions/editField';
import { folderName } from '../../utils/menuHelpers';

class FolderName extends Component {
  constructor(props) {
    super(props);
    this._TYPE = 'FOLDER';
    this._FIELD = 'NAME';
  }

  render() {
    const { onClick } = this.props;
    return (
      <div onClick={handleEvent(onClick)}>
        <i className={determineIcon(this.props)} />
        {this.renderName()}
      </div>
    );
  }

  renderName() {
    const { editing, folder, textValue } = this.props;
    if (!folder.locked) {
      return (
        <EditableField
          editing={editing}
          TYPE={this._TYPE}
          FIELD={this._FIELD}
          item={folder}
          className="folder folder-name"
          inputId={`folder-name-${folder.id}`}
          inputClass="folder-input folder-name-input"
          textValue={textValue}
          submit={updateFolder(folder, { name: textValue })}
          value={folder.name}
          menu={folderName(() => startEdit(this._TYPE, this._FIELD, folder.id, folder.name))} />
      );
    }
    return (
      <span className="folder" onContextMenu={handleEvent(() => {})}>
        {folder.name}
      </span>
    );
  }
}

const determineIcon = ({ expanded }) => {
  return `fa--spacer fa fa-caret-${expanded ? 'up' : 'down'}`;
};

export default connectDispatch(FolderName);
