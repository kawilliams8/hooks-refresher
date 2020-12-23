import React, { useReducer } from 'react';

const CounterWithReducer = () => {
    //useReducer takes a function to call on state, and the default state
    //Default state is typically an object, to manage higher levels of state complexity
    //Since the default is object, the first returned from useReducer is the larger idea of "state"
    //If we passed something simple, like 0, the first returned from useReducer could just be "count"
    //Dispatch() is the func called to update state, given some parameters
    //The reducer needs current state, and the action to execute upon it

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case 'decrement':
                return { count: state.count - 1 };
        }
    };
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    const increment = () => {
        dispatch({ type: 'increment' });
    };

    const decrement = () => {
        dispatch({ type: 'decrement' });
    };

    return (
        <>
            <button onClick={increment}>+</button>
            <h2>Count: {state.count}</h2>
            <button onClick={decrement}>-</button>
        </>
    );
};

export default CounterWithReducer;
