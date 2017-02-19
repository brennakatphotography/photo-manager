import React, { Component } from 'react';
import { connectDispatch } from '../../utils/connectStore';
import { focusToEnd, handleEvent } from '../../utils/eventHelpers';
import { cancelEdit, updateEdit } from '../../actions/editField';
import { getIn } from 'fun-util';

class EditableField extends Component {
  render() {
    const { editing, FIELD, item, TYPE } = this.props;
    if (!isEditing(editing, item, TYPE, FIELD)) {
      return this.renderField();
    }
    return this.renderForm();
  }

  renderField() {
    const { className, dispatch, item, label, menu, value } = this.props;
    return (
      <div className={className} onContextMenu={dispatch(menu)}>
        {label ? `${label}: ` : ''}{value}
      </div>
    );
  }

  renderForm() {
    const {
      className, dispatch, FIELD, folderId, inputClass,
      inputId, item, label, submit, textValue, TYPE
    } = this.props;
    return (
      <form className={className} onSubmit={handleEvent(() => dispatch(submit))}>
        <label htmlFor={inputId}>{label ? `${label}: ` : ''}</label>
        <input
          type="text"
          className={inputClass}
          id={inputId}
          value={textValue}
          autoFocus={true}
          onFocus={focusToEnd}
          onKeyDown={({ key }) => key === 'Escape' && dispatch(cancelEdit())}
          onChange={({ target }) => dispatch(updateEdit(TYPE, FIELD, item.id, target.value))}
          onBlur={() => dispatch(cancelEdit())} />
      </form>
    );
  }
}

const isEditing = (editing, item, TYPE, FIELD) => {
  return getIn(editing, 'id') === item.id && editing.type === TYPE && editing.field === FIELD;
};

export default connectDispatch(EditableField);
