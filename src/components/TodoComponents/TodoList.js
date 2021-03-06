// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import './Todo.css';

function TodoList(props) {
    return (
        <div>
            <h1>To-Do List</h1>
            {props.todos.map(todo => {
                return <Todo 
                toggleCompleted={props.toggleCompleted}
                todo={todo}
                 />;
            })}
        </div>
    );
}

export default TodoList;