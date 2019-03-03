import React, { Component } from 'react';
import './resources/css/Body.css';
import * as config from './config';
import LauncherCarousel from './launcherCarousel/launcherCarousel';

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <h4 className="Body-title">{config.BODY_TITLE}</h4>
        <div>        
            <LauncherCarousel></LauncherCarousel>
        </div>
      </div>
    );
  }
}

export default Body;