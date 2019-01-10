import React from 'react';

function TodoForm(props) {
 return (
    <form className="todo-form" onSubmit= {props.addNewTodo} >
        <input
        className= "todo-form-input"
        value={props.todoName}
        type= "text"
        name= "todoName"
        placeholder= "Task"
        onChange= {props.handleChanges}
        />
        <button type="submit">
            Add ToDo
        </button>
        <button>
            Clear Completed
        </button>
    </form>
 );   
}

export default TodoForm;