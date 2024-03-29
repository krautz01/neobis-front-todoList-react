import React from "react";

export default function CreateTodoForm(addTask) {
  return (
    <form id="new-todo-form">
      <h4>What's on your todo?</h4>
      <input
        type="text"
        placeholder="e.g. Get some milk"
        name="content"
        id="content"
        onChange={addTask}
      />
      <h4>Pick a category</h4>
      <div className="options">
        <label>
          <input type="radio" name="category" id="category1" value="business" />
          <span className="bubble business"></span>
          <div>Business</div>
        </label>
        <label>
          <input type="radio" name="category" id="category2" value="personal" />
          <span className="bubble personal"></span>
          <div>Personal</div>
        </label>
      </div>

      <input type="submit" value="Add todo" />
    </form>
  );
}
