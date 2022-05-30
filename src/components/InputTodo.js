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

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert("Can't add an empty task!");
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" name="title" placeholder="Add new task" value={this.state.title} onChange={this.onChange} />
        <button type="submit">Add</button>
      </form>
    );
  }
}
