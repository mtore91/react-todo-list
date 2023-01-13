import React from 'react';



function TodoItem(props) {
  return (
    <div className='todo-item'>
      {props.todo}
      <button onClick={() => props.onRemove(props.index)}>remove</button>
    </div>
  );
}

export default TodoItem;
