import React from 'react';

import TodoForm from './TodoForm';
import Todo from './Todo';

class TodoList extends React.Component {

  render() {
    return (
      <div>
      <h1>My Todo List:</h1>
      {console.log('TodoList props', this.props)}
      <TodoForm {...this.props} addItem={this.props.addItem} />
      {this.props.todos.map(todo => (
        <div>

          <Todo key={todo.task} {...this.props} todo={todo} toggleCompleted={this.props.toggleCompleted} clearCompleted={this.props.clearCompleted} />
        </div>
      ))}
      </div>
    );
  }
};

export default TodoList;