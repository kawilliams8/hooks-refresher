import React, { useState, useEffect, useRef } from 'react';

const NameRefs = () => {
    const [name, setName] = useState('');
    const count = useRef(1);
    const inputRef = useRef();

    //useEffect(() => {
    //infinite loop while trying to count the renders
    //useEffect runs on a render, and an updated state triggers a render
    //setCount(prevCount => prevCount + 1);
    //});

    //Refs persist, but do not trigger a re-render when changed
    //useRef returns an object: {current: default prop}

    useEffect(() => {
        //Updates on each component re-render
        //count.current persists across renders
        //Does not trigger own re-render
        count.current = count.current + 1;
    });

    const focus = () => {
        //inputRef is the DOM node
        inputRef.current.focus();
    };

    const blur = () => {
        inputRef.current.blur();
    };

    return (
        <>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
            <div>Name: {name}</div>
            <h1>I rendered {count.current} times.</h1>
            <button onClick={focus}>Focus Input</button>
            <button onClick={blur}>Blur Input</button>
        </>
    );
};

export default NameRefs;
