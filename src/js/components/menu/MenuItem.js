import React, { Component } from 'react';
import { connectDispatch } from '../../utils/connectStore';

class MenuItem extends Component {
  render() {
    const { action, text } = this.props;
    if (action) {
      return (
        <li className="context-menu-item" onClick={action}>
          {text}
        </li>
      );
    }
    return (
      <li className="context-menu-item context-menu-item--disabled">
        {text}
      </li>
    );
  }
}

export default connectDispatch(MenuItem);
