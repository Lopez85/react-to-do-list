import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineCloseCircle } from "react-icons/ai";
import { VscTasklist } from "react-icons/vsc";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  // Add task
  const handleSubmit = (e) => {
    e.preventDefault();
    const addTask = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      completed: false,
    };
    setTasks([...tasks, addTask]);
    setInput("");
  };

  // Delete task
  const deleteTask = (id) => {
    let filteredTasks = [...tasks].filter((tasks) => tasks.id !== id);
    setTasks(filteredTasks);
  };

  // Toggle completed task
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="w-full h-screen m-auto p-4 text-center bg-stone-400 font-mono">
      <div className="">
        <h1 className="text-4xl pb-8 flex text-center justify-center">
          <VscTasklist />
          ToDOList
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="relative container flex self-center justify-center w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md">
            <AiOutlinePlus className="absolute text-2xl flex h-full top-0 left-4" />
            <input
              className=" leading-9 w-full text-center  py-2 text-[18px] border-2 rounded-lg border-solid  bg-stone-300 border-stone-600 outline-0 block "
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter a task"
              type="text"
            />
          </div>
        </form>

        <div className="space-y-4 text-center">
          {tasks.map((task) => (
            <div
              className={`p-3 flex leading-9 w-11/12 items-center justify-between  py-2 text-[18px] border-2 rounded-lg border-solid bg-stone-500 border-stone-600   ${
                task.completed ? "line-through" : ""
              }`}
              key={task.id}
              onDoubleClick={() => toggleComplete(task.id)}
            >
              <p className="capitalize">{task.text}</p>
              <AiOutlineCloseCircle
                onClick={() => deleteTask(task.id)}
                className="text-[30px]"
              />
            </div>
          ))}
        </div>
        <p className="m-4">
          {tasks < 1 ? "You have no tasks" : `Tasks: ${tasks.length}`}
        </p>
      </div>
    </div>
  );
}

export default App;
