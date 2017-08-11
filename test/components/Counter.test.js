import React from 'react';
import Counter from '../../src/components/Counter';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

/**
 * Mock Functions
 * ---------------
 * - Erases the actual implementation of a function
 * - Captures calls to the function
 * - Captures instances of constructor functions when instantiated with `new`
 * - Allows test-time configuration of return values
 */
describe('Snapshot Testing using Jest only', () => {
  it ('renders correctly', () => {
    const value = 0;
    const actions = {
      increment: jest.fn(), // jest.fn is a mock function
      decrement: jest.fn(),
      reset    : jest.fn()
    }
    const tree = renderer.create(
      <Counter value={value} {...actions} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

function setup(value = 0) {
  const actions = {
    increment: jest.fn(), // jest.fn is a mock function
    decrement: jest.fn(),
    reset    : jest.fn()
  }
  const counter = shallow(
    <Counter value={value} {...actions} />
  );

  return {
    counter  : counter,
    actions  : actions,
    incrBtn  : counter.find('#increment'),
    decrBtn  : counter.find('#decrement'),
    resetBtn : counter.find('#reset'),
    countVal : counter.find('span')
  };
}

/**
 * Enzyme's Shallow Rendering
 * --------------------------
 * - Helpful to test a component as a unit.
 * - Ensures test aren't asserting based on behavior of child components
 * - http://airbnb.io/enzyme/docs/api/shallow.html
 */
describe('DOM Testing using Enzyme', () => {
  it ('should initially have a count value of 0', () => {
    const { countVal } = setup();
    expect(countVal.text()).toEqual('0');
  });

  it ('clicking + should invoke the increment callback', () => {
    const { actions, incrBtn } = setup();

    incrBtn.simulate('click');
    expect(actions.increment).toBeCalled();
    expect(actions.decrement).not.toBeCalled();
  });

  it ('clicking - should invoke the decrement callback', () => {
    const { actions, decrBtn } = setup();

    decrBtn.simulate('click');
    expect(actions.decrement).toBeCalled();
    expect(actions.increment).not.toBeCalled();
  });

  it ('clicking Reset should invoke the reset callback', () => {
    const { actions, resetBtn } = setup();

    resetBtn.simulate('click');
    expect(actions.reset).toBeCalled();
    expect(actions.decrement).not.toBeCalled();
    expect(actions.increment).not.toBeCalled();
  });
});
