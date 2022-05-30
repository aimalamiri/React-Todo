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
      <form onSubmit={this.onSubmit} className="form-container">
        <input
          type="text"
          name="title"
          className="input-text"
          placeholder="Add new task"
          value={this.state.title}
          onChange={this.onChange}
        />
        <button type="submit" className="input-submit">
          Add
        </button>
      </form>
    );
  }
}
