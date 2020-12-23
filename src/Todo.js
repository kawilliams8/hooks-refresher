import React from 'react';
import { ACTIONS } from './TodosWithReducer';

const Todo = ({ todo, dispatch }) => {
    return (
        <div>
            <span style={{ color: todo.complete ? '#AAA' : '#000' }}>
                {todo.name}
            </span>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_COMPLETE, payload: { id: todo.id } })}>
              Toggle Complete
            </button>
            <button>Delete</button>
        </div>
    );
};

export default Todo;
