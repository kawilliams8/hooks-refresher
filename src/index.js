import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Counter () {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}

ReactDOM.render(<Counter />, document.getElementById('root'));
