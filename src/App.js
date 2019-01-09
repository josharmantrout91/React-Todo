import React from 'react';


const todoData = [
  { todoName: 'Fork and Clone' },
  { todoName: 'Set up Branch' },
  { todoName: 'React Wizardry' },
  { todoName: 'Gaze at the Beauty of my Creation'}
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todoList: todoData
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className ="App">
        
      </div>
    );
  }
}

export default App;
