import counterReducer from '../../src/reducers/Counter';

describe('Counter reducer tests', () => {
  it ('should provide an initial value of 0', () => {
    expect(counterReducer(undefined, {})).toBe(0);
  });

  it ('should increment state value on INCREMENT', () => {
    const action = {
      type: 'INCREMENT'
    };
    expect(counterReducer(undefined, action)).toBe(1);
    expect(counterReducer(1, action)).toBe(2);
    expect(counterReducer(2, action)).toBe(3);
  });

  it ('should decrement state value on DECREMENT', () => {
    const action = {
      type: 'DECREMENT'
    };
    expect(counterReducer(undefined, action)).toBe(-1);
    expect(counterReducer(1, action)).toBe(0);
    expect(counterReducer(2, action)).toBe(1);
  });

  it ('should reset state value to 0 on RESET', () => {
    const action = {
      type: 'RESET'
    };
    expect(counterReducer(undefined, action)).toBe(0);
    expect(counterReducer(1, action)).toBe(0);
    expect(counterReducer(2, action)).toBe(0);
    expect(counterReducer(-2, action)).toBe(0);
  });
});
