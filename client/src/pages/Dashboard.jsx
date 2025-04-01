import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import TaskCard from "../components/TaskCard";
import Column from "../components/Column";

const Dashboard = () => {
  const [name, setName] = useState("");

  const [tasks, setTasks] = useState([
    { id: 1, title: "Read a daily Meditation", status: "todo" },
    { id: 2, title: "Workout (Back and Biceps)", status: "in-progress" },
  ]);

  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (userName) {
      setName(userName);
    }
  }, []);

  const moveTask = (taskId, newStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const addTask = () => {
    if (!newTask.trim()) return;

    const newTaskObj = {
      id: Date.now(),
      title: newTask,
      status: "todo",
    };
    setTasks((prevTasks) => [...prevTasks, newTaskObj]);
    setNewTask("");
  };

  return (
    <>
      <main>
        <div className="mt-8">
          {/* Top user info */}
          <div className="flex gap-2 ml-8 items-center text-black mb-12">
            <div className="bg-[#656363] w-7 h-7 rounded-full"></div>
            <p className="text-xl">{name || "Loading..."}</p>
            <MdKeyboardArrowDown className="text-xl" />
          </div>

          <div className="container mx-auto">
            {/* Three columns: To Do, In Progress, Done */}
            <div className="grid grid-cols-3 gap-4 place-items-center">
              <Column
                title="To Do"
                status="todo"
                tasks={tasks}
                moveTask={moveTask}
              />
              <Column
                title="In Progress"
                status="in-progress"
                tasks={tasks}
                moveTask={moveTask}
              />
              <Column
                title="Done"
                status="done"
                tasks={tasks}
                moveTask={moveTask}
              />
            </div>

            {/* Add New Task Form */}
            <div className="mt-8 flex items-center gap-2 justify-center">
              <input
                type="text"
                className="border border-gray-400 px-2 py-1 rounded w-1/3"
                placeholder="New task title"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button
                onClick={addTask}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
