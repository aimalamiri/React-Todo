import React from 'react';
import TodoList from './TodosList';

export default class TodoContainer extends React.PureComponent {
  state = {
    todos: [
      {
        id: 1,
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: 2,
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: 3,
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <TodoList todos={this.state.todos} />
      </React.Fragment>
    );
  }
}
