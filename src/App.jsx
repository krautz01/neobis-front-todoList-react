import { useState } from "react";
import "./App.css";
import TodoComponent from "./components/TodoComponent";
import CreateTodoForm from "./components/CreateTodoForm";

function App() {
  const [tasks, setTasks] = useState([
    {
      text: "Learn React",
      category: "personal",
      isFinished: false,
    },
    {
      text: "Learn Node",
      category: "personal",
      isFinished: false,
    },
    {
      text: "Learn Express",
      category: "personal",
      isFinished: false,
    },
    {
      text: "Learn MongoDB",
      category: "personal",
      isFinished: false,
    },
  ]);
  const [name, setName] = useState("");

  const addUserName = () => {
    setName(document.getElementById("name").value);
    console.log(name);
  };

  const addTask = (event) => {
    task = {
      text: document.getElementById("content").value,
      category: document.querySelector('input[name="category"]:checked').value,
      isFinished: false,
    };
    setTasks([...tasks, task]);
  };

  const changeStatus = (id) => {
    const current = [...tasks].find((task) => task.id === id);
    current.isFinished = !current.isFinished;
  };

  return (
    <main className="app">
      <section className="greeting">
        <h2 className="title">
          What's up,{" "}
          <input
            type="text"
            id="name"
            placeholder="Name here"
            onChange={addUserName}
          />
        </h2>
      </section>
      <section className="create-todo">
        <h3>CREATE A TODO</h3>
        <CreateTodoForm addTask={addTask} />
      </section>

      <section className="todo-list">
        <h3>TODO LIST</h3>
        <div className="list" id="todo-list">
          {tasks.map((task) => {
            <TodoComponent
              id={new Date().getTime()}
              text={task.text}
              category={task.category}
            />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
