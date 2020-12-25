import React, { useEffect } from 'react';

//The logic is encapsulated in the useLogger component, but available anywhere in the app

const useLogger = (value) => {
    useEffect(() => {
        console.log('value: ', value);
    }, [value]);
};

export default useLogger;
