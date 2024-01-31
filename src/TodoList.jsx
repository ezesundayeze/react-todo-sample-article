import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, onAddTask, onToggleCompleted, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} onToggleCompleted={onToggleCompleted} onDeleteTask={onDeleteTask} />
      ))}
      <input type="text" placeholder="Add new task" onKeyDown={(event) => {
          if (event.key == "Enter" && event.target.value !== "") {
            onAddTask(event.target.value);
            event.target.value = "";
          }
        }} />
    </ul>
  );
};

export default TodoList;
