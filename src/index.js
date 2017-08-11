import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter';
import counter from './reducers/Counter';

const store = createStore(counter);
const mount = document.getElementById('mount');

const render = () => ReactDOM.render(
  <Counter
    value={ store.getState() }
    increment={ () => store.dispatch({ type: 'INCREMENT' }) }
    decrement={ () => store.dispatch({ type: 'DECREMENT' }) }
    reset={ () => store.dispatch({ type: 'RESET' }) }
  />,
  mount
);

render();
store.subscribe(render);
