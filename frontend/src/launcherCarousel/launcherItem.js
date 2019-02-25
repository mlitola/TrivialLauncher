import React, { Component } from 'react';
import './launcherItem.css';
import * as config from '../config';

class LauncherItem extends Component {
  render(genre) {
    function handleClick(e) {
        e.preventDefault();
        console.log('The genre: was clicked.');
    };

    let launcherItem;

    if (!this.props.genre) {
        launcherItem = <div className="noItems"><p>{config.NO_ITEMS}</p></div>;
    } else {
        if (this.props.genre && this.props.genre === 'media') {
            launcherItem = <div><h4 className="title">{config.MEDIA_TITLE}</h4><div className="defaultItem" onClick={handleClick}></div><p>{this.props.data.artistName}</p><p className="moveUp">{this.props.data.songName}</p></div>;
        } else if (this.props.genre && this.props.genre === 'apps') {
            launcherItem = <div><h4 className="title">{config.APP_TITLE}</h4><div className="defaultItem" onClick={handleClick}></div><p>{this.props.data.name}</p></div>;
        } else {
            launcherItem = <div><h4 className="title">{config.MISC_TITLE}</h4><div className="defaultItem" onClick={handleClick}></div></div>;
        }
    }
    
    return (
        <div className="items">
            {launcherItem}
        </div>
    );
  }
}

export default LauncherItem;