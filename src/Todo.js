import React from 'react';
import PropTypes from 'prop-types';
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
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>Delete</button>
        </div>
    );
};

export default Todo;

Todo.propTypes = {
    todo: PropTypes.object,
    complete: PropTypes.bool,
    dispatch: PropTypes.func
};
