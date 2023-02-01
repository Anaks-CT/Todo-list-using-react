import { useEffect } from "react";
import { useState } from "react";
import "../style.css";
import Todo from "./todo";
import AddTodo from "./addTodo";

export default function Card() {
  const [newTask, setTask] = useState("");
  const [allTask, setAllTask] = useState(getLocalStorageItems);

  //   setting to localStorage
  useEffect(() => {
    localStorage.setItem("TODO", JSON.stringify(allTask));
  }, [allTask]);

  //   getting from localStorage
  function getLocalStorageItems() {
    let allTask = localStorage.getItem("TODO");
    if (allTask) {
      return JSON.parse(allTask);
    } else {
      return [];
    }
  }
  function addTask(event) {
    event.preventDefault();
    newTask!=='' &&
    setAllTask([...allTask, { title: newTask, completed: false }]);
    setTask("");
  }
 
  function todoInput(event) {
    setTask(event.target.value);
  }
  const [index, setIndex] = useState();
  function edit(item, index) {
    setTask(item.title);
    setIndex(index);
  }
  return (
    <div>
      <AddTodo
        key={allTask.title}
        todoInput={todoInput}
        addTask={addTask}
        newTask={newTask}
        index={index}
        setAllTask={setAllTask}
        setTask={setTask}
        setIndex={setIndex}
      />

      <div className="tab-content" id="ex1-content">
        <div
          className="tab-pane fade show active"
          id="ex1-tabs-1"
          role="tabpanel"
          aria-labelledby="ex1-tab-1"
        >
          <Todo allTask={allTask} setAllTask={setAllTask} edit={edit} />
        </div>
      </div>
    </div>
  );
}
