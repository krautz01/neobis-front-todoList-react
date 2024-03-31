import React, { useState } from "react";
import "./TodoList.css";

export default function TodoList({ todo, deleteTodo, completeTodo }) {
  const [editableText, setEditableText] = useState(todo.text);
  const [isEditing, setIsEditing] = useState(false);

  const btnCompleted = () => {
    completeTodo({
      ...todo,
      completed: !todo.completed,
    });
  };

  const handleTextChange = (e) => {
    setEditableText(e.target.value);
  };

  const editText = () => {
    setIsEditing(!isEditing);
  };

  return (
    <li className="list-group-item">
      <div className="list-group-item-left">
        <label className="todo-list-radio">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={btnCompleted}
          />
          <span
            className={`radio-btn ${
              todo.category === "personal" ? "personal" : "business"
            }`}
          ></span>
        </label>
        {isEditing ? (
          <input
            className={`todo-task-text ${todo.completed ? "task-done" : ""}`}
            value={editableText}
            onChange={handleTextChange}
          />
        ) : (
          <span
            className={`todo-task-text ${todo.completed ? "task-done" : ""} `}
            onDoubleClick={editText}
          >
            {editableText}
          </span>
        )}
      </div>
      <span className="todo-buttons">
        <button className="btn btn-edit-task" onClick={editText}>
          {isEditing ? "Done" : "Edit"}
        </button>
        <button
          className="btn btn-edit-delete"
          onClick={() => deleteTodo(todo)}
        >
          Delete
        </button>
      </span>
    </li>
  );
}
