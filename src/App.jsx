import React, { Component } from 'react';

import './App.css';
import Counter from './Components/Counter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      showCounter: true
    };
  }

  addCount = () => {
    const previousCount = this.state.counter;
    const newCount = previousCount + 1;
    this.setState({
      counter: newCount
    });
  };

  showCounter = () => {
    this.setState((prevState) => ({
      showCounter: !prevState.showCounter
    }));
  };

  render() {
    return (
      <div className="App">
        {(this.state.showCounter && (
          <Counter count={this.state.counter} addOneToCount={this.addCount} />
        )) ||
          ''}
        <button onClick={this.showCounter}>Show Counter</button>
      </div>
    );
  }
}

export default App;
