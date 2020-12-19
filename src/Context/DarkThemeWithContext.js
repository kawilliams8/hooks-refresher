import React, { useState } from 'react';
// import FunctionalContext from './FunctionalContext';
import ClassContext from './ClassContext';

export const DarkThemeContext = React.createContext();

const DarkThemeWithContext = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    };

    //The Provider must wrap the child elements that need access to the value
    //The value is like global state for the children components

    return (
        <>
            <DarkThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}>Toggle Dark Mode</button>
                {/* <FunctionalContext/> */}
                <ClassContext/>
            </DarkThemeContext.Provider>
        </>
    );
};

export default DarkThemeWithContext;
