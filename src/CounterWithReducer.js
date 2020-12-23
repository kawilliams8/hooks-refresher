import React, { useState, useReducer } from 'react';

const CounterWithReducer = () => {
    const [count, setCount] = useState(0);

    //useReducer takes a function to call on state, and the default state
    //Default state is typically an object, to manage higher levels of complexity
    //Since default is object, the first returned is the larger idea of "state"
    //If we passed something simple, like just 0, the first returned could just be "count"
    //Dispatch() is the func called to update state
    //The reducer needs current state, and the action to execute upon it

    const reducer = (state, action) => {

    };
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    };

    return (
        <>
            <button onClick={increment}>+</button>
            <h2>Count: {count}</h2>
            <button onClick={decrement}>-</button>
        </>
    );
};

export default CounterWithReducer;
