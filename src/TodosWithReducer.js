import React, { useReducer } from 'react';

const TodosWithReducer = () => {
    const ACTIONS = {

    };
    const reducer = (todos, action) => {
        switch (action.type) {
            default: return todos;
        }
    };
    const [todos, dispatch] = useReducer(reducer, []);

    return (
        <>
            <form>
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            </form>
        </>
    );
};

export default TodosWithReducer;
