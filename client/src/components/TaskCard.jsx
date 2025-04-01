import React from "react";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { IoEllipsisHorizontalCircleOutline } from "react-icons/io5";

const TaskCard = ({ task, moveTask }) => {
  return (
    <div className="rounded-3xl bg-[#9747FF] w-[387px]">
      <div className="flex justify-between mx-auto px-4  text-white p-2 ">
        <h1 className="text-lg">Daily Plan</h1>
        <div className="flex gap-1">
          {task.status !== "todo" && (
            <button
              className="cursor-pointer text-2xl "
              onClick={() => moveTask(task.id, "todo")}
            >
              <RiCheckboxBlankCircleLine />
            </button>
          )}
          {task.status !== "in-progress" && (
            <button
              className="cursor-pointer text-2xl"
              onClick={() => moveTask(task.id, "in-progress")}
            >
              <IoEllipsisHorizontalCircleOutline />
            </button>
          )}
          {task.status !== "done" && (
            <button
              className="cursor-pointer text-2xl"
              onClick={() => moveTask(task.id, "done")}
            >
              <RiCheckboxCircleFill />
            </button>
          )}
        </div>
      </div>

      <div className="mx-auto px-4 bg-white rounded-2xl w-full h-[219px]">
        <div className="pt-6">
          <h1 className="text-2xl mb-2">{task.title}</h1>
          <p>This is just an example description</p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
