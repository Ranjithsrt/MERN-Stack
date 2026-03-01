
import './App.css'
import TodoForm from './components/TodoForm'
 import TodoList from './components/TodoList'
 import TodoSummary from './components/TodoSummary'
 import useTodo from './hooks/useTodo'
 
function App() {
    const { todos, addTodo, toggleTodo, deleteTodo, ClearAll, EditTodo } =
      useTodo();
 
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded shadow-2xl p-8 md:p-12 border border-white/20">
            <h1 className="text-3xl font-bold text-center bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-10  ">
              My Todo List
            </h1>
            <TodoForm addTodo={addTodo} />
            <TodoList
              todos={todos}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              EditTodo={EditTodo}
              // clearAll={ClearAll}
            />
            {todos.length > 0 && (
              <TodoSummary todos={todos} ClearAll={ClearAll} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App
