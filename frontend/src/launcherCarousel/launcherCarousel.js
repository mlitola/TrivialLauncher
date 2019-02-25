import React, { Component } from 'react';
import LauncherItem from './launcherItem';

class LauncherCarousel extends Component {
  getItems = () => {
    return {"apps":[{"name":"Madplay","endpoint":"/madplay","file":"madplay","args":"/home/user/Music/song.mp3"}], "media": [{"songName": "Salt", "artistName": "Catherine Wheel"}]};
  }

  createCarousel = () => {
    let items = [];
    let data = this.getItems();

    if (data.apps && data.apps.length > 0) {
        let apps = [];

        for (let i = 0; i < data.apps.length; i++) {
            apps.push(<LauncherItem genre={'apps'} data={data.apps[i]} />);
        }
        items.push(<div>{apps}</div>);
    }

    if (data.media && data.media.length > 0) {
        let media = [];

        for (let i = 0; i < data.media.length; i++) {
            media.push(<LauncherItem genre={'media'} data={data.media[i]} />);
        }
        items.push(<div>{media}</div>);
    }

    if (data.misc && data.misc.length > 0) {
        let misc = [];

        for (let i = 0; i < data.misc.length; i++) {
            misc.push(<LauncherItem genre={'misc'} data={data.misc[i]} />);
        }
        items.push(<div>{misc}</div>);
    }
    
    return items;
  }

  render() {
    return (
      <div>
        {this.createCarousel()}
      </div>
    );
  }
}

export default LauncherCarousel;