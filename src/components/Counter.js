import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  render() {
    const { value, increment, decrement, reset } = this.props;
    return(
      <div>
        <p>Count: <span>{ value }</span> times</p>
        <button id='increment' onClick={ increment }>+</button>
        <button id='decrement' onClick={ decrement }>-</button>
        <button id='reset' onClick={ reset }>Reset</button>
      </div>
    );
  }
}

Counter.PropTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
}

export default Counter;
