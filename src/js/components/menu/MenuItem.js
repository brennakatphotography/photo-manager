import React, { Component } from 'react';
import { connectDispatch } from '../../utils/connectStore';

class MenuItem extends Component {
  render() {
    const { action, text } = this.props;
    return (
      <li className="context-menu-item" onClick={action}>
        {text}
      </li>
    );
  }
}

export default connectDispatch(MenuItem);
