import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [selected, setSelected] = useState("All")

  const handleClick = event => { setSelected(event.target.innerText) }

  function handleDeleteTask(deletedTask) {
    console.log(deletedTask)

    setTasks(tasks.filter((task) => {
      return (task.text !== deletedTask)
    }))
  }

  function handleTaskSubmit(newTask) {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} selected={selected} handleClick={handleClick} />
      <NewTaskForm categories={categories.filter((category) => category !== "All")} tasks={tasks} handleTaskSubmit={handleTaskSubmit} />
      <TaskList handleDeleteTask={handleDeleteTask} tasks={tasks} selected={selected} />
    </div>
  );
}

export default App;
