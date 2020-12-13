import React, { useState, useMemo } from 'react';

const ThemeWithMemo = () => {
    const slowFunction = (num) => { //Called every time the component mounts/updates... performance drain
        console.log('in slow');
        // eslint-disable-next-line
        for (let i = 0; i <= 100000000; i++) {}
        return num * 2;
    };

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => {
        return slowFunction(number);
        //Memoize the return number, reruns only if number changes
        //useMemo is called frequently... make sure the added memory (and slow func's execution time) is worth it
    }, [number]);

    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'pink',
            color: dark ? 'pink' : 'black'
        };
        //A second themeStyle2 object with the exact same keys/values is not strictly equal, since comparison looks at the reference, not the content
        //themeStyles is a new object/new reference every time the function component runs... they're never equal
        //memoization doesn't reinitialize a new themeStyles object unless dark changes, it maintains the referenced obj
    }, [dark]);

    return (
        <>
            <h1>Theme Change With useMemo Hook</h1>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value, 10))} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    );
};

export default ThemeWithMemo;
