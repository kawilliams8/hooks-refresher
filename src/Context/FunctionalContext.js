import React, { useContext } from 'react';
import { DarkThemeContext } from './DarkThemeWithContext';

const FunctionalContext = () => {
    //useContext instead of wrapping the return div in the DarkThemeContext.Consumer function
    const darkTheme = useContext(DarkThemeContext);

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    };

    return (
        <div style={themeStyles}>
          Functional Dark Theme
        </div>
    );
};

export default FunctionalContext;
