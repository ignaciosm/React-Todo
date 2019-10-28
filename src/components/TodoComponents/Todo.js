import React from 'react';

class Todo extends React.Component {


  render() {
    return (
    <>
    <div key={this.props.todo.id}
      className={`todo${this.props.todo.completed ? ' completed' : ''}`}
      onClick={() => this.props.toggleCompleted(this.props.todo.id)}
    >
      <p>{this.props.todo.task}</p>
    </div>
    {/* <div >
      {console.log('ignacio todo', this.props.todos)}
      <p>{this.props.todo.task}</p>
    </div> */}
    </>
      
    );
  }
};

export default Todo;