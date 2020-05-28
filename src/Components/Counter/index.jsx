import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor method ran');
    this.state = {
      variableUpdatedInComponentDidMount: '',
      message: '',
      variableUpdatedInComponentDidUpdate: ''
    };
  }

  componentDidMount() {
    console.log('ComponentDidMount');
    this.setState({
      variableUpdatedInComponentDidMount: 'Aline',
      message: 'Hi Class'
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('ComponentDidUpdate');
    // console.log('PROPS NOW', this.props);
    // console.log('PROPS BEFORE', prevProps);

    // console.log('STATE NOW', this.state);
    // console.log('STATE BEFORE', prevState);

    const date = Date.now();
    // if (date % 3 === 0) {
    //   this.setState({
    //     variableUpdatedInComponentDidUpdate: date
    //   });
    // }

    if (this.props.count !== prevProps.count) {
      this.setState({
        variableUpdatedInComponentDidUpdate: date
      });
    }
  }

  componentWillUnmount() {
    console.log('Component unmounted');
  }

  render() {
    console.log('Render method ran');
    return (
      <div>
        <h1>Counter</h1>
        <small>Message: {this.state.message}</small>
        <h3>Count: {this.props.count}</h3>
        <button onClick={() => this.props.addOneToCount()}>Add Count</button>
      </div>
    );
  }
}

export default Counter;
