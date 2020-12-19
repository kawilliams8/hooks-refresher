import React from 'react';
import DarkThemeContext from './Context/DarkThemeWithContext';
import NameRefs from './NameRefs';
import ThemeWithMemo from './ThemeWithMemo';
import Multiplier from './Multiplier';
import MultiplierAsClass from './MultiplierAsClass';

const App = () => {
    return (
        <>
            <DarkThemeContext />
            <NameRefs />
            <ThemeWithMemo />
            <Multiplier />
            <MultiplierAsClass />
        </>
    );
};

export default App;
