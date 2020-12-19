import React from 'react';
import NameRefs from './NameRefs';
import ThemeWithMemo from './ThemeWithMemo';
import Multiplier from './Multiplier';
import MultiplierAsClass from './MultiplierAsClass';

const App = () => {
    return (
        <>
            <NameRefs />
            <ThemeWithMemo />
            <Multiplier />
            <MultiplierAsClass />
        </>
    );
};

export default App;
