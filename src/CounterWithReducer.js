import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

const init = initialCount => {
    return { count: initialCount };
};

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset'
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return init(action.payload);
        default:
            return state;
    }
};

const CounterWithReducer = ({ initialCount }) => {
    //useReducer takes a function to call on state, and the default state
    //Default state is typically an object, to manage higher levels of state complexity
    //Since the default is object, the first returned from useReducer is the larger idea of "state"
    //If we passed something simple, like 0, the first returned from useReducer could just be "count"
    //Dispatch() is the func called to update state, given some parameters
    //The reducer needs current state, and the action to execute upon it
    //The ACTIONS object means the hard-coded strings are only in one place... removes spelling errors elsewhere

    const [state, dispatch] = useReducer(reducer, initialCount, init);

    const increment = () => {
        dispatch({ type: ACTIONS.INCREMENT });
    };

    const decrement = () => {
        dispatch({ type: ACTIONS.DECREMENT });
    };

    const reset = () => {
        dispatch({ type: ACTIONS.RESET, payload: initialCount });
    };

    return (
        <>
            <h2>Count: {state.count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>RESET</button>
        </>
    );
};

export default CounterWithReducer;

CounterWithReducer.propTypes = {
    initialCount: PropTypes.number
};
