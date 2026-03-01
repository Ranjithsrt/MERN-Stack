import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

const App = () => {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded shadow-2xl p-8 md:p-12 border border-white/20">
          <h1 className="text-3xl font-semibold text-center bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-10 uppercase ">My Todo List</h1>

          <AddTodoForm addTodo={addTodo} />
          <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

          {todos.length > 0 && <TodoSummary todos={todos} />}
        </div>
      </div>
    </div>
  );
};

export default App;
