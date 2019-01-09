import React from 'react';

function TodoForm(props) {
 return (
    <form onSubmit= {props.addNewTodo} >
        <input
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