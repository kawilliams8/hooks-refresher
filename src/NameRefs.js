import React, { useState, useEffect } from 'react';

const NameRefs = () => {
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);

    //useEffect(() => {
    //infinite loop while trying to count the renders
    //useEffect runs on a render, and an updated state triggers a render
    //setCount(prevCount => prevCount + 1);
    //});

    return (
        <>
            <input value={name} onChange={e => setName(e.target.value)} />
            <div>Name: {name}</div>
            <h1>{count}</h1>
        </>
    );
};

export default NameRefs;
