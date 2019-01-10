import React from 'react';
import './App.css';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoData = [
  { todoName: 'Fork and Clone' },
  { todoName: 'Set up Branch' },
  { todoName: 'React Wizardry' },
  { todoName: 'Abracadabra! Here\'s Your To-Do List!'}
];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todoData,
      todoName: ''
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNewTodo = e => {
    e.preventDefault();
    this.setState({
      todoList: [
        ...this.state.todoList, { todoName: this.state.todoName }
      ],
      todoName: ''
    });
  };
  
  render() {
    return (
      <div className ="App">
        <TodoList todoDataList={this.state.todoList} />
        <TodoForm 
          addNewTodo={this.addNewTodo}
          handleChanges={this.handleChanges}
          todoName={this.state.todoName}
        />
      </div>
    );
  }
}

export default App;
