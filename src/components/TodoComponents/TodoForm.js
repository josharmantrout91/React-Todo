import React from 'react';

function TodoForm(props) {
 return (
    <form className="todo-form" onSubmit= {props.addNewTodo} >
        <input
        className= "todo-form-input"
        value={props.newTask}
        type= "text"
        name= "newTask"
        placeholder= "Task"
        onChange= {props.handleChanges}
        />
        <button type="submit">
            Add ToDo
        </button>
        <button onClick={props.clearCompleted}>
            Clear Completed
        </button>
    </form>
 );   
}

export default TodoForm;