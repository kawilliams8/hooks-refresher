import React, { useContext, useState } from 'react';

export const ThemeContext = React.createContext();
export const UpdateThemeContext = React.createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const useUpdateTheme = () => {
    return useContext(UpdateThemeContext);
};

//eslint-disable-next-line
const ThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    };

    return (
        <ThemeContext.Provider value={darkTheme}>
            <UpdateThemeContext.Provider value={toggleTheme}>
                {children}
            </UpdateThemeContext.Provider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
