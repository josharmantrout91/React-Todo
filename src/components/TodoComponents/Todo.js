import React from 'react';
import './Todo.css';

function Todo(props) {
    const { toggleCompleted, todo} = props;

    return <div
        className= {props.todo.completed ? 'completed' : null}
        onClick={e => toggleCompleted(todo.id)}
    >
    {props.todo.task}
    </div>;
}
export default Todo;