import React from 'react';
import { useTheme, useUpdateTheme } from './themeContext';

const FunctionalContext = () => {
    const darkTheme = useTheme();
    const toggleTheme = useUpdateTheme();

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    };

    return (
        <>
            <button onClick={toggleTheme}>Toggle Dark Mode</button>
            <div style={themeStyles}>
              Functional Dark Theme
            </div>
        </>
    );
};

export default FunctionalContext;
