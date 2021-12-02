import React, { useState } from "react";

function NewTaskForm({ categories, handleTaskSubmit }) {
  const [details, setDetails] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Code");

  // console.log(details)

  const handleSubmit = event => {
    event.preventDefault();
    const newTask = {
      text: details,
      category: selectedCategory,
    }
    handleTaskSubmit(newTask);
    setDetails("");

    // tasks = [...tasks, newTask]

  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={(event) => setDetails(event.target.value)} />
      </label>
      <label>
        Category
        <select value={selectedCategory} onChange={(event) => { setSelectedCategory(event.target.value) }} name="category">
          {categories.map((category) => {
            return <option key={category} value={category}>{category}</option>
          })}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;


// .filter((category) => category !== "All")