import React, { useContext, useState } from 'react';

//Create two contexts, to store and update the theme
export const ThemeContext = React.createContext();
export const UpdateThemeContext = React.createContext();

//expose two custom hooks to use the contexts and update them elsewhere
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

    //Wrap any child components in the two Providers
    return (
        <ThemeContext.Provider value={darkTheme}>
            <UpdateThemeContext.Provider value={toggleTheme}>
                {children}
            </UpdateThemeContext.Provider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
