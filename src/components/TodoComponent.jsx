import React from "react";

export default function TodoComponent(
  id,
  text,
  category,
  isFinished,
  changeStatus,
  deleteTask
) {
  return (
    <div className="todo-item" id={id}>
      <label>
        <input
          type="checkbox"
          checked={isFinished}
          onClick={() => changeStatus(id)}
        />
        <span
          className={
            "bubble"((category = "personal"))
              ? (category = "personal")
              : (category = "business")
          }
        ></span>
      </label>
      <div className="todo-content">
        <input type="text" value={text} />
      </div>
      <div className="actions">
        <button className="edit"></button>
        <button className="delete" onClick={() => deleteTask(id)}></button>
      </div>
    </div>
  );
}
