import React from "react";

const TodoItem = ({ task, onToggleCompleted, onDeleteTask }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={()=>onToggleCompleted(task.id)}
      />
      {task.text}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
