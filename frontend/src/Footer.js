import React, { Component } from 'react';
import './resources/css/Footer.css';
import * as config from './config';


class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer-madeBy">by {config.CREATED_BY}</div>
        <div className="Footer-spans">
          <span className="Footer-version">{config.VERSION}</span>
          <span className="Footer-flipMe">&copy;</span>
          <span>{config.CREATED_AT}</span>
        </div>
      </div>
    );
  }
}

export default Footer;