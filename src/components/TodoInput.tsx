import { FormEvent, useState } from "react";
import { Todos } from "../Data/Data";
import TodoList from "./TodoList";
const TodoInput = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(Todos);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(text);
    const todo = {
      id: todos.length + 1,
      title: text,
      completed: false,
    };
    setTodos([...todos, todo]);
    setText("");
  };
  console.log(todos);
  const checkTask = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <>
      <div className="w-[85%] mx-auto h-10 mt-10 mb-6  ">
        <form
          className="flex items-center gap-x-2"
          method="post"
          onSubmit={(e) => handleSubmit(e)}>
          <input
            value={text}
            type="text"
            onChange={(e) => setText(e.target.value)}
            className="w-[90%] mx-auto h-10 bg-zinc-800 border-[1px] border-zinc-500 rounded-md shadow text-zinc-100 px-4 active:border-none"
            placeholder="Say something..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Add
          </button>
        </form>
      </div>
      <p className={`text-teal-500 text-center my-2  text-sm`}>
        {todos.length} items in the list
      </p>
      <TodoList todos={todos} checkTask={checkTask} />
    </>
  );
};

export default TodoInput;
