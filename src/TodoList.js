import React, { useState } from 'react';
import TodoItem from './TodoItem';
import Header from './Header'


function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState({ index: null, value: "" });

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
  
  const handleEdit = (index) => {
    const newTodos = [...todos];
    setEditingTodo({ index, value: newTodos[index] });
  };
  const handleSave = (event, index) => {
    event.preventDefault();
    const newTodos = [...todos];
    newTodos[editingTodo.index] = editingTodo.value;
    setTodos(newTodos);
    setEditingTodo({ index: null, value: "" });
  };
  const handleInputChange = (event) => {
    setEditingTodo({ ...editingTodo, value: event.target.value });
  };


  return (
    <div className="todo-list">
      <Header />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          onChange={handleChange}
          value={newTodo}
        />
        <button type="submit">Add</button>
      </form>
      <h3>Things left to do:</h3>
      <div>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} onRemove={handleRemove} onEdit={handleEdit} index={index} editingTodo={editingTodo} handleInputChange={handleInputChange} handleSave={handleSave} className="todo-item" />

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
          
//         );
//       }
//     }

export default TodoList;
