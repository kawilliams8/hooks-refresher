import React, { useState } from 'react';
import List from './List';

const ThemedCounter = () => {
    const [num, setNum] = useState(0);
    const [dark, setDark] = useState(false);
    const getNums = () => {
        //Mimics fetching data from an api
        return [num, num + 1, num + 2];
    };
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
