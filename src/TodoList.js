import React, { Component } from 'react';
import TodoItem from './TodoItem';





class TodoList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        todos: [],
        newTodo: ""
      };
    }
    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({
        todos: [...this.state.todos, this.state.newTodo],
        newTodo: ""
      });
    }
  
    handleChange = (event) => {
      this.setState({
        newTodo: event.target.value
      });
    }
    handleRemove = (index) => {
        this.setState({
          todos: this.state.todos.filter((_, i) => i !== index)
        });
      }
    
      render() {
        return (
            <div className="todo-list">
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Add a todo" onChange={this.handleChange} value={this.state.newTodo} />
              <button type="submit">Add</button>
            </form>
            <div>
              {this.state.todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} onRemove={this.handleRemove} index={index} className="todo-item" />
              ))}
            </div>
          </div>
          
        );
      }
    }

export default TodoList;
