import TodoList from "./TodoList";
import { FormEvent, useState, useEffect } from "react";
// import { Todos } from "../Data/Data";
interface todoType {
  id: number;
  title: string;
  completed: boolean;
}
const TodoInput = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<todoType[]>([]);
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
    // console.log("FROM THE LOCAL STORAGE", storedTodos);
  }, []);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //console.log(text);
    const todo = {
      id: todos.length + 1,
      title: text,
      completed: false,
    };
    /**For Local storage */
    const storedTodos = [...todos, todo];
    setTodos([...todos, todo]);
    setText("");
    /**Trying to store the data in the local storage */
    localStorage.setItem("todos", JSON.stringify(storedTodos));
  };
  //   console.log(todos);
  /**Function to mark the task as checked */
  const checkTask = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    /**Storing the data in local storage */
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };
  /**Function to delete the task */
  const deleteTask = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    /**Storing the data in local storage */
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };
  /**Function to edit the task */
  const editTask = (id: number, newTask: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: newTask };
      }
      return todo;
    });
    /**Storing the data in local storage */
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
    setText("");
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
            className="w-[90%] mx-auto h-10 bg-zinc-900 border-[1px] border-zinc-500 rounded-md shadow text-zinc-100 px-4 active:border-none placeholder-zinc-500 placeholder-opacity-50"
            placeholder="Say something..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Add
          </button>
        </form>
      </div>
      <p
        className={`${
          todos.length ? "text-lime-500" : "text-zinc-500"
        } text-center mb-2 p-2 text-sm bg-zinc-800 w-[70%] sm:w-[25%] mx-auto rounded`}>
        {todos.length > 0
          ? `${todos.length} item(s) in the list`
          : "The todos list is empty!"}
      </p>
      <TodoList
        todos={todos}
        checkTask={checkTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </>
  );
};

export default TodoInput;
