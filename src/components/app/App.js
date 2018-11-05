import React, { Component } from 'react';
import propTypes from 'prop-types';
import './App.css';

import Content from '../global/content/content';

class App extends Component {
  static propTypes = {
    children: propTypes.object.isRequired
  };

  render() {
    const { children } = this.props;
    return (
      <div className="App">
        <Content body = {children}/>
      </div>
    );
  }
}

export default App;
