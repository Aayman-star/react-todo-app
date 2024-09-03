import { useState } from "react";
interface SingleTodoProp {
  id: number;
  title: string;
  completed: boolean;
  checkTask: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, newTask: string) => void;
}
const SingleTodo = ({
  id,
  title,
  completed,
  checkTask,
  deleteTask,
  editTask,
}: SingleTodoProp) => {
  const [newTask, setNewTask] = useState(title);
  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = (e: { key: string }) => {
    if (e.key === "Enter") {
      setIsEditing(!isEditing);
      editTask(id, newTask);
    }
  };
  return (
    <div
      className={`w-full md:w-[85%] md:mx-auto bg-zinc-800/50 p-4 font-custom text-zinc-100 my-2 rounded-md shadow-md italic border-[1px] border-zinc-900`}>
      <div className="flex items-center justify-between">
        {isEditing ? (
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder={newTask}
            onKeyDown={handleEdit}
            className="bg-zinc-800/50 text-zinc-100 w-[50%] md:p-2 focus:border-[1px]"
          />
        ) : (
          <p className={`${completed && "text-green-500"} font-light`}>
            {id}-{title}
          </p>
        )}

        <div className="flex items-center gap-x-2">
          <button
            className="transition-transform active:scale-95"
            onClick={() => setIsEditing(!isEditing)}>
            <span className="material-icons text-zinc-500 hover:text-zinc-400 hover:shadow-md hover:shadow-zinc-400/50 transform transition-all ease-in-out duration-200 text-2xl font-semibold shadow-sm p-1 shadow-zinc-500/50  rounded-md">
              edit
            </span>
          </button>
          <button
            className="transition-transform active:scale-95"
            onClick={() => checkTask(id)}>
            <span className="material-icons text-emerald-500 transform transition-all ease-in-out duration-200 hover:text-emerald-400 hover:shadow-md hover:shadow-emerald-400/50 text-2xl font-semibold shadow-sm p-1 shadow-emerald-500/50  rounded-md">
              check
            </span>
          </button>
          <button
            className="transition-transform active:scale-95"
            onClick={() => deleteTask(id)}>
            <span className="material-icons text-2xl text-indigo-500 transform transtion-all ease-in-out duration-200 hover:text-indigo-400 hover:shadow-md hover:shadow-indigo-400/50 font-semibold p-1  rounded-md shadow-sm shadow-indigo-500/50">
              close
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTodo;

/**
 *  className=" px-2 py-1 rounded-md border-[1px] border-indigo-500 text-indigo-500 shadow-md"
 * className ="rounded-md border-[1px] border-emerald-500 text-emerald-500 shadow-md";
 */
