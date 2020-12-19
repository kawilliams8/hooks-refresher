import React from 'react';
import FunctionalContext from './FunctionalContext';
import ThemeProvider from './themeContext';

const DarkThemeWithContext = () => {
    return (
        <>
            <ThemeProvider>
                <FunctionalContext/>
            </ThemeProvider>
        </>
    );
};

export default DarkThemeWithContext;
