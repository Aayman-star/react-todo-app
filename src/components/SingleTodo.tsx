interface SingleTodoProp {
  id: number;
  title: string;
  completed: boolean;
  checkTask: (id: number) => void;
}
const SingleTodo = ({ id, title, completed, checkTask }: SingleTodoProp) => {
  return (
    <div
      className={`w-[85%] mx-auto bg-zinc-800/50 p-4 font-custom text-zinc-100 my-2 rounded-md shadow-md italic border-[1px] border-zinc-900`}>
      <div className="flex items-center justify-between">
        <p className={`${completed && "text-green-500"} font-light`}>
          {id}-{title}
          <span className="text-sm">
            ---{completed ? "Completed" : "Pending"}
          </span>
        </p>
        <button
          onClick={() => checkTask(id)}
          className=" px-2 py-1 rounded-md border-[1px] border-green-500 text-green-500 shadow-md">
          Check
        </button>
      </div>
    </div>
  );
};

export default SingleTodo;
