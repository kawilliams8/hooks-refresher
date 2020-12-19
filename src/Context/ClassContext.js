import React from 'react';
import { DarkThemeContext } from './DarkThemeWithContext';

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
                <DarkThemeContext.Consumer>
                    {darkTheme => {
                        return <div style={this.themeStyles(darkTheme)}>Class Dark Theme</div>;
                    }
                    }
                </DarkThemeContext.Consumer>
            </>
        );
    }
}

export default ClassContext;
