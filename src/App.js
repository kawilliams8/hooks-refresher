import React from 'react';
// import DarkThemeContext from './Context/DarkThemeWithContext';
// import NameRefs from './NameRefs';
// import ThemeWithMemo from './ThemeWithMemo';
// import Multiplier from './Multiplier';
// import MultiplierAsClass from './MultiplierAsClass';
// import TodosWithReducer from './TodosWithReducer';
import CounterWithReducer from './CounterWithReducer';

const App = () => {
    return (
        <>
            {/* <TodosWithReducer /> */}
            <CounterWithReducer initialCount={100}/>
            {/* <DarkThemeContext />
            <NameRefs />
            <ThemeWithMemo />
            <Multiplier />
            <MultiplierAsClass /> */}
        </>
    );
};

export default App;
