import React, { Component } from 'react';
import { connectAll } from '../utils/connectStore';
import ContextMenu from './menu/ContextMenu';

class App extends Component {
  render() {
    const { contextMenu } = this.props;
    return (
      <div className="app">
        <ContextMenu {...contextMenu} />
        {this.props.children}
      </div>
    );
  }
}

export default connectAll(App);
