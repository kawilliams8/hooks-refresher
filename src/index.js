import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Multiplier () {
    const [num, setNum] = useState({ myNum: 1 });
    const [num2, setNum2] = useState({ myNum2: 2 });
    //useState returns the current state variable and a function to update it
    //Use it as you would this.setState()
    //Requires one argument, the initial state: 1
    //Can be object, or any data type

    return (
        <div>
            <h1>Your Number: {num.myNum}</h1>
            <h1>Your Second Number: {num2.myNum2}</h1>
            <button onClick={() => {
                setNum({ myNum: num.myNum * 10 });
                setNum2({ myNum2: num2.myNum2 * 10 });
            }}>Multiply by 10</button>
        </div>
    );
}

ReactDOM.render(<Multiplier />, document.getElementById('root'));
