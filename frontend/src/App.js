import React, { Component } from 'react';
import './resources/css/App.css';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>

        <Body></Body>

        <Footer></Footer>
      </div>
    );
  }
}

export default App;
