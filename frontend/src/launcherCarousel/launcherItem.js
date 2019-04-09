import React, { Component } from 'react';
import '../resources/css/launcherItem.css';

class LauncherItem extends Component {
  launchProg(e, endpoint) {
    e.preventDefault();
    fetch('http://localhost:8080' + endpoint)
      .then(response => console.log(response));
  };

  render() {    
    let launcherItem;

    if (this.props.index > 2) {
        launcherItem = <div></div>;
    } else {
        launcherItem = <div>
            <div className="defaultItem" onClick={(e) => this.launchProg(e, this.props.data.endpoint)}></div>
            <p>{this.props.data.name}</p>
        </div>;
    }

    return (
        <React.Fragment>
            {launcherItem}
        </React.Fragment>
    );
  }
}

export default LauncherItem;