import React from 'react';
import './App.css';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos = [
  {
    task: 'Start Here',
    id: 0,
    completed: false
  },
  {
    task: 'First Task',
    id: 1,
    completed: false
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todos,
      newTask: '',
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNewTodo = e => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos, 
        { task: this.state.newTask, 
          id: Date.now(), 
          completed: false }
      ],
      newTask: ''
    });
  };

  toggleCompleted = id => {
    // set state
    // look through task list and find the task I clicked on
    // toggle the completed status for that task
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo, completed: !todo.completed
          } 
        };
        return todo;
      } )
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  }
  
  render() {
    return (
      <div className ="App">
        <TodoList 
        toggleCompleted = {this.toggleCompleted}
        todos={this.state.todos} 
        />
        <TodoForm 
          addNewTodo={this.addNewTodo}
          handleChanges={this.handleChanges}
          clearCompleted={this.clearCompleted}
          newTask={this.state.newTask}
        />
      </div>
    );
  }
}

export default App;
