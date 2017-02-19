import React, { Component } from 'react';
import { connectDispatch } from '../../utils/connectStore';
import { addPosition } from '../../utils/positionHelpers';
import { hideContextMenu } from '../../utils/eventHelpers';
import MenuItem from './MenuItem';

class ContextMenu extends Component {
  render() {
    const { actions, dispatch, position, visible } = this.props;
    const { x, y } = addPosition(position, 5, 5);
    if (visible) {
      return (
        <div
          className="context-menu-container"
          onClick={() => dispatch(hideContextMenu())}>
          <ul className="context-menu" style={{ top: `${y}px`, left: `${x}px` }}>
            {actions.map((action, key) => <MenuItem key={key} {...action} />)}
          </ul>
        </div>
      );
    }
    return <div />
  }
}

export default connectDispatch(ContextMenu);