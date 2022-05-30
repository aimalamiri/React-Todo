import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodosList';

export default class TodoContainer extends React.PureComponent {
  constructor() {
    super();
    this.state = {
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
  }

  delTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: [...todos.filter((todo) => todo.id !== id)],
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
      title,
      completed: false,
    };
    const { todos } = this.state;
    this.setState({
      todos: [...todos, todo],
    });
  };

  setUpdate = (updatedTitle, id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        const t = todo;
        if (t.id === id) {
          t.title = updatedTitle;
        }
        return t;
      }),
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="Container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodoList
            todos={todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
