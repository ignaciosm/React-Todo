import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: ''
    }
  }

  handleChanges = e => {
    this.setState({
      newTodo: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("it's working!", this.props);
    this.props.addItem(this.state.newTodo);
    this.setState({ newTodo: '' });
  };

  handleClear = e => {
    e.preventDefault();
    console.log("clear completed", this.props);
    this.props.clearCompleted();
  };  

  render() {

    return (
      <div>
      {console.log('ignacio todoform', this.props)}
      {/* <p>{props.todo.task}</p> */}
      <form>
          <label htmlFor="todo">New Todo</label>
          <input
            type="text"
            task="todo"
            id=""
            value={this.state.newTodo}
            onChange={this.handleChanges}
          />
          <button type="submit" onClick={this.handleSubmit}>Add Todo</button>
          <button type="submit" onClick={this.handleClear}>Clear Completed</button>
        </form>
      </div>
    );
  }
};

export default TodoForm;