import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import Content from '../global/content/content';

class App extends Component {
  static PropTypes = {
    children: PropTypes.object.isRequired
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
