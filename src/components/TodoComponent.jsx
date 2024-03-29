import React from "react";

export default function TodoComponent(id, text, category, isFinished) {
  return (
    <div className="todo-item" id={id}>
      <label>
        <input type="checkbox" checked={isFinished} />
        <span
          className={
            "bubble" ? (category = "personal") : (category = "business")
          }
        ></span>
      </label>
      <div className="todo-content">
        <input type="text" value={text} />
      </div>
      <div className="actions">
        <button className="edit"></button>
        <button className="delete"></button>
      </div>
    </div>
  );
}
