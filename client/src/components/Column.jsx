import React from "react";
import TaskCard from "./TaskCard";

const Column = ({ title, status, tasks, moveTask }) => {
  const filteredTasks = tasks.filter((task) => task.status === status);
  return (
    <div className="bg-[#DEDEDE] w-[470px] h-[945px] rounded-md shadow-lg p-4 flex flex-col gap-4 items-center">
      <div className="flex justify-center mb-4">
        <div className="bg-[#B4B4B4] text-center w-40 p-2 rounded-md text-white">
          <p className="text-2xl">{title}</p>
        </div>
      </div>

      {filteredTasks.map((task) => (
        <TaskCard key={task.id} task={task} moveTask={moveTask} />
      ))}
    </div>
  );
};

export default Column;
