const TodoSummary = ({ todos }) => {
  const pending = todos.filter((t) => !t.completed).length;
  const completed = todos.length - pending;
  return (
    <div className="mt-12 pt-8 border-t-2 border-gray-200">
      <div className="flex justify-between items-center text-lg font-semibold">
        <span className="text-blue-600">{pending} Active</span>
        <span className="text-gray-600">{completed} Completed</span>
        <span className="text-purple-600">{todos.length} Total</span>
      </div>
    </div>
  );
};

export default TodoSummary;
