import React from 'react';
import useLocalStorage from './useLocalStorage';
import useLogger from './useLogger';

const Custom = () => {
    const [name, setName] = useLocalStorage('name', '');
    //Calling a custom hook, that relies on useEffect
    useLogger(name);

    return (
        <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
        />
    );
};

export default Custom;
