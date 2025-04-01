import React from "react";

const TaskCard = ({ task, moveTask }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        {task.status !== "todo" && (
          <button
            className="bg-gray-300"
            onClick={() => moveTask(task.id, "todo")}
          >
            Todo
          </button>
        )}
        {task.status !== "in-progress" && (
          <button
            className="bg-gray-300"
            onClick={() => moveTask(task.id, "in-progress")}
          >
            In Progress
          </button>
        )}
        {task.status !== "done" && (
          <button
            className="bg-gray-300"
            onClick={() => moveTask(task.id, "done")}
          >
            Done
          </button>
        )}
      </div>
      <div>
        <h1>{task.title}</h1>
      </div>
    </div>
  );
};

export default TaskCard;
