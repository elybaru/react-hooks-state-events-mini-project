import React, { useState } from "react";

function CategoryFilter({ categories, selected, handleClick }) {

  console.log(categories)
  let categoriesToDisplay = { categories }
  return (
    <div className="categories">
      <h1>{selected}</h1>
      <h5>Category filters</h5>
      {categories.map((category, index) => {
        return <button className={category === selected ? "selected" : null} onClick={handleClick} key={index}>{category}</button>
      })}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
