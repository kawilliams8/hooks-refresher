import React from 'react';

const Todo = ({ todo }) => {
    return (
        <div>
            <span style={{ color: todo.complete ? '#AAA' : '#000'}}>
                {todo.name}
            </span>
        </div>
    );
};

export default Todo;
