import React, { Component } from 'react';
import '../resources/css/launcherItem.css';

class LauncherItem extends Component {
  render() {
    let launcherItem = <div>
        <div className="defaultItem"></div>
        <p>{this.props.data.name}</p>
    </div>;
    
    return (
        <React.Fragment>
            {launcherItem}
        </React.Fragment>
    );
  }
}

export default LauncherItem;