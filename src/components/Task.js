import React from "react";

function Task({ task, category, handleDeleteTask }) {

  function removeTask() {
    handleDeleteTask(task)
    console.log("from console log in child ", task)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button onClick={removeTask} className="delete">X</button>
    </div>
  );
}

export default Task;
