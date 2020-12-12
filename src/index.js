import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Multiplier () {
    const [num, setNum] = useState(1);

    return (
        <div>
            <h1>Your Number: {num}</h1>
            <button onClick={() => setNum(num * 10)}>Multiply by 10</button>
        </div>
    );
}

ReactDOM.render(<Multiplier />, document.getElementById('root'));
