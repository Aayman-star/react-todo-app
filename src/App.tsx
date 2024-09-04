import TodoInput from "./components/TodoInput";

function App() {
  return (
    <>
      <main className="w-full min-h-screen bg-zinc-900 ">
        <div className="absolute inset-0 bg-[url('/anchors-away.svg')]">
          <div className="max-w-4xl h-auto md:min-h-screen mx-auto p-4 md:px-16 md:pt-10">
            <h1 className="text-xl md:text-3xl text-zinc-100 font-semibold font-custom mb-4 text-center">
              CRUD Todo App with React!
            </h1>
            <TodoInput />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
