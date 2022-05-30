import React from 'react';

export default class TodoItem extends React.PureComponent {
  render() {
    return <li>{this.props.todo.title}</li>;
  }
}
