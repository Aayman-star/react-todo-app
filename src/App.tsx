import TodoInput from "./components/TodoInput";

function App() {
  return (
    <>
      <main className="w-full min-h-screen bg-zinc-900">
        <div className="max-w-4xl h-auto md:min-h-screen mx-auto p-4 md:p-20">
          <h1 className="text-xl md:text-3xl text-zinc-100 font-semibold font-custom m-4 text-center">
            Hello from Create React App with vite
          </h1>
          <TodoInput />
        </div>
      </main>
    </>
  );
}

export default App;
