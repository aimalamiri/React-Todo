import React from 'react';

export default class InputTodo extends React.PureComponent {
  state = {
    title: '',
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form>
        <input type="text" name="title" placeholder="Add new task" value={this.state.title} onChange={this.onChange} />
        <button type="submit">Add</button>
      </form>
    );
  }
}
