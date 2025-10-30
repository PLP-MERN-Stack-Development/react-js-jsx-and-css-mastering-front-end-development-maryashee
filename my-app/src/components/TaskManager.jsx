import React, { useState } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]); // stores all tasks
  const [newTask, setNewTask] = useState(""); // stores input value

  // add a new task
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask(""); // clear input
  };

  // toggle completed status
  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // delete a task
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Task Manager</h2>

      <div className="flex mb-4">
        <input
          type="text"
          className="flex-grow p-2 border rounded-l-lg outline-none text-gray-900"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r-lg"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex justify-between items-center p-2 border-b ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            <span onClick={() => toggleTask(index)} className="cursor-pointer">
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-500 hover:text-red-700"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
