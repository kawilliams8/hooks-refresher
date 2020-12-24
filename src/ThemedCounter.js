import React, { useState, useCallback } from 'react';
import List from './List';

//Each click of the Toggle button triggers a re-render of the List

const ThemedCounter = () => {
    const [num, setNum] = useState(0);
    const [dark, setDark] = useState(false);
    const getNums = useCallback((incrementor) => {
        //Mimics fetching data from an api
        //getNums is re-created every time ThemedCounter is rendered, which changes getNums, which calls the List useEffect
        //With useCallback, it now only updates getNums when [num] changes
        //Similar to useMemo, except for the return value. Here, it returns the whole function.
        //useCallback and useMemo both exist to handle referential equality issues, when output is a useEffect dependency
        return [num + incrementor, num + incrementor + 1, num + incrementor + 2];
    }, [num]);
    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    };
    return (
        <div style={theme}>
            <input
                type="number"
                value={num}
                onChange={e => setNum(parseInt(e.target.value, 10))}
            />
            <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Colors</button>
            <List getNums={getNums}/>
        </div>
    );
};

export default ThemedCounter;
