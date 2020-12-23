import React, { useReducer, useState } from 'react';
import Todo from './Todo';

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_COMPLETE: 'toggle-complete'
};
const newTodo = (name) => {
    return { id: Date.now(), name: name, complete: false };
};
const reducer = (todos, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)];
        case ACTIONS.TOGGLE_COMPLETE:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return ({ ...todo, complete: !todo.complete });
                }
                return todo;
            });
        default:
            return todos;
    }
};

const TodosWithReducer = () => {
    const [todos, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
        setName('');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            </form>
            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>;
            })}
        </>
    );
};

export default TodosWithReducer;
