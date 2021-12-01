import React from "react";

function NewTaskForm({ categories }) {
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <h1>{categories[1]}</h1>
        <select name="category">
          {categories.filter((category) => category !== "All").map((category, index) => {
            <option value={category[index]}>{category[index]}</option>
          })}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
