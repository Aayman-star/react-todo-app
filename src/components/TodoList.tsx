import SingleTodo from "./SingleTodo";
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
interface TodoList {
  todos: Todo[];
  checkTask: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, newTitle: string) => void;
}
const TodoList = ({ todos, checkTask, deleteTask, editTask }: TodoList) => {
  // console.table(todos);
  return (
    <div className="w-full md:max-w-4xl md:mx-auto text-zinc-100 font-custom">
      {todos.map((todo, i) => (
        <SingleTodo
          key={i}
          {...todo}
          checkTask={checkTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
