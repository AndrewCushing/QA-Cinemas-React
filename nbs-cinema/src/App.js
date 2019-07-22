import React, { Component } from 'react';
import './App.css';
import CinemaContainer from './component/CinemaContainer';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
      }
  };

  render() {
    return (
        <div className="App">
          <CinemaContainer />
        </div>
    );
  }
}

export default App;
