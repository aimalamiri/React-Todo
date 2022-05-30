import React from 'react';
import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodosList';
import { v4 as uuidv4 } from 'uuid';

export default class TodoContainer extends React.PureComponent {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: uuidv4(),
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    }));
  };

  addTodoItem = (title) => {
    const todo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, todo],
    });
  };

  render() {
    return (
      <div className="Container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodoList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.delTodo} />
        </div>
      </div>
    );
  }
}
