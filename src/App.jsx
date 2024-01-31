import React, { useState } from "react";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const toggleCompleted = (taskId) => {
    setTasks(
      tasks.map((task) =>{
        return task.id === taskId ? { ...task, completed: !task.completed } : task
      }
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList
        tasks={tasks}
        onAddTask={addTask}
        onToggleCompleted={toggleCompleted}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
