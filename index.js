import React, { Component } from 'react';
import { render } from 'react-dom';
import Day from './Day';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      blocks: []
    };
  }

  render() {
    return (
      <Day title={'Monday'} blocks={this.state.blocks}/>
    );
  }
}

render(<App />, document.getElementById('root'));
