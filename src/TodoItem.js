import React from 'react';



function TodoItem(props) {
  const { index, todo, onRemove, onEdit, editingTodo, handleInputChange, handleSave } = props;
  return (
    <div className="todo-item">
      {editingTodo.index === index ? (
        <>
          <form onSubmit={(e) => handleSave(e, index)}>
            <input type="text" value={editingTodo.value} onChange={handleInputChange} />
            <button type="submit">Save</button>
          </form>
        </>
      ) : (
        <>
          {todo}
          <button onClick={() => onRemove(index)}>remove</button>
          <button onClick={() => onEdit(index)}>edit</button>
        </>
      )}
    </div>
  );
}


export default TodoItem;
