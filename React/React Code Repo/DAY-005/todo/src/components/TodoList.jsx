import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-4xl mb-4">No tasks yet!</div>
        <p className="text-xl text-gray-500">Add your first task above</p>
      </div>
    );
  }
  return (
    <div className="space-y-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
