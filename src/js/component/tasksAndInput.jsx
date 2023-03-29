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
        <div className="Task text-center ">
          <div className="row  justify-content-center">
            <div className="col-md-6 col-8">
              <form onSubmit={submitWrapper}>
                <input
                  className="text-center form-control"
                  placeholder="No tasks, add a task!"
                  type="text"
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setCount(count + 1);
                    }
                  }}
                  value={input}
                ></input>
              </form>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6 col-8">
              <ul className="list-group ">
                {arrayOfTasks.map((item, index) => (
                  <li className="list-group-item rounded">
                    <span className="float-start items-style">{item}</span>

                    <span
                      className="float-end text-danger"
                      onClick={() => {
                        deleteTheTask(index);
                        setCount(count - 1);
                      }}
                    >
                      {" "}
                      <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                    </span>
                  </li>
                ))}

                <div className="itemFilter rounded">
                  <h2>{count} item/s left...</h2>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TasksAndInput;
