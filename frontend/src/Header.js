import React, { Component } from 'react';
import './Header.css';
import * as config from './config';

class Header extends Component {
  render() {
    return (
      <div className="Header">
          <h1 className="Header-title">{config.MAIN_TITLE}</h1>
          <h4 className="Header-underscore">{config.SUB_TITLE}</h4>
      </div>
    );
  }
}

export default Header;