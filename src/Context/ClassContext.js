import React from 'react';
// import { DarkThemeContext } from './DarkThemeWithContext';
import { ThemeProvider } from './themeContext';

class ClassContext extends React.Component {
    themeStyles (dark) {
        return {
            backgroundColor: dark ? '#333' : '#ccc',
            color: dark ? '#ccc' : '#333',
            padding: '2rem',
            margin: '2rem'
        };
    }

    render () {
        return (
            <>
                <ThemeProvider>
                    {darkTheme => {
                        return <div style={this.themeStyles(darkTheme)}>Class Dark Theme</div>;
                    }
                    }
                </ThemeProvider>
            </>
        );
    }
}

export default ClassContext;
