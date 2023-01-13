import React, { useState } from 'react';
import TodoItem from './TodoItem';



function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const handleChange = event => {
    setNewTodo(event.target.value);
  };

  const handleRemove = index => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-list">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          onChange={handleChange}
          value={newTodo}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onRemove={handleRemove}
            index={index}
            className="todo-item"
          />
        ))}
      </div>
    </div>
  );
}


// class TodoList extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         todos: [],
//         newTodo: ""
//       };
//     }
//     handleSubmit = (event) => {
//       event.preventDefault();
//       this.setState({
//         todos: [...this.state.todos, this.state.newTodo],
//         newTodo: ""
//       });
//     }
  
//     handleChange = (event) => {
//       this.setState({
//         newTodo: event.target.value
//       });
//     }
//     handleRemove = (index) => {
//         this.setState({
//           todos: this.state.todos.filter((_, i) => i !== index)
//         });
//       }
    
<<<<<<< HEAD
//       render() {
//         return (
//             <div className="todo-list">
//             <form onSubmit={this.handleSubmit}>
//               <input type="text" placeholder="Add a todo" onChange={this.handleChange} value={this.state.newTodo} />
//               <button type="submit">Add</button>
//             </form>
//             <div>
//               {this.state.todos.map((todo, index) => (
//                 <TodoItem key={index} todo={todo} onRemove={this.handleRemove} index={index} className="todo-item" />
//               ))}
//             </div>
//           </div>
=======
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
>>>>>>> d632ce4bc2495a3d6a2781193c46772068b6200c
          
//         );
//       }
//     }

export default TodoList;
