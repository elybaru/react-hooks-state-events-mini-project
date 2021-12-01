import React from "react";
import Task from "./Task"

let tasksToDisplay;

function TaskList({ tasks, handleDeleteTask, selected }) {

  let tasksToDisplay = tasks.filter(task => {
    if (selected === "All") return true;
    return (selected === task.category);
  })


  return (
    < div className="tasks" >
      <ul className="tasksListUl">
        {tasksToDisplay.map((task, index) => (
          <Task key={task.text} task={task.text} category={task.category} handleDeleteTask={handleDeleteTask} />
        ))}
      </ul>
    </div >
  )
}


export default TaskList;




  // );