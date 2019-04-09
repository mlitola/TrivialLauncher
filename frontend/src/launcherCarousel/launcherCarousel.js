import React, { Component } from 'react';
import LauncherItem from './launcherItem';

class LauncherCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {'program': []} ,
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/all')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data  } = this.state;
    
    return (
      <div className="items">
        {data.program.map((prog, i) =>
          <div key={prog.objectID}>
            <LauncherItem data={prog} index={i} />
          </div>
        )}
      </div>
    );
  }
}

export default LauncherCarousel;