import React, { useState } from 'react';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
const TodoList = ({ todos }) => {
  const [todoItems, setTodoItems] = useState(todos);

  const handleToggle = (index) => {
    const updatedTodos = [...todoItems];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodoItems(updatedTodos);
  };

  return (
    <div>
      <h2><ReceiptLongOutlinedIcon/>Todo List</h2>
      <ul>
        {todoItems.map((todo, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(index)}
              />
              {todo.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;