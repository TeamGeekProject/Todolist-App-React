import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

function TasksAndInput(props) {
  const [input, setInput] = useState("");
  const [arrayOfTasks, setArrayOfTasks] = useState([]);
  const [count, setCount] = useState(0);

  function submitWrapper(e) {
    e.preventDefault();

    let ar = arrayOfTasks;
    ar.push(input);
    setArrayOfTasks(ar);

    setInput("");
  }

  function deleteTheTask(index) {
    let ar2 = arrayOfTasks;

    setArrayOfTasks(ar2.filter((item, i) => i != index));
  }

  function countTheTasks() {}

  return (
    <div className="container">
      <h1 className="Title text-center">Todo List</h1>

      <div className="conatiner-flex text-center ms-3">
        <div className="Task text-center" style={{ fontSize: "20px" }}>
          <form onSubmit={submitWrapper}>
            <input
              className="text-center"
              placeholder="No tasks, add a task!"
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            ></input>
          </form>

          <div className="todo text-center me-5 ms-3">
            
            <ul>
              {arrayOfTasks.map((item, index) => (
                <li>
                  <span>{item}</span>

                  <span onClick={() => deleteTheTask(index)}>
                    {" "}
                    <FontAwesomeIcon
                      icon={faXmark}
                      style={{ height: "18px", color: "darksalmon" }}
                    ></FontAwesomeIcon>
                  </span>
                </li>
              ))}

              <div className="itemFilter" style={{ fontSize: "20px" }}>
                <h2>{count} item/s left...</h2>
                <span onChange={() => countTheTasks(index + 1)}> </span>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TasksAndInput;