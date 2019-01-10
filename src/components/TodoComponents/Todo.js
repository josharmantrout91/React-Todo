import React from 'react';
import './Todo.css';

function Todo(props) {
    return <div>{props.todo.todoName}</div>;
}
export default Todo;