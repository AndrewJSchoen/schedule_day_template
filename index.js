import React, { Component } from 'react';
import { render } from 'react-dom';
import Day from './Day';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      blocks: [{name:"Item 1",start:7.75,end:8.5},
               {name:"Item 2",start:8.75,end:9.5},
               {name:"Item 3",start:14.75,end:15.75}]
    };
  }

  render() {
    return (
      <Day title={'Column 1'} 
           blocks={this.state.blocks} 
           start={7} 
           end={19} 
           height={500}
           width='20vw'/>
    );
  }
}

render(<App />, document.getElementById('root'));
