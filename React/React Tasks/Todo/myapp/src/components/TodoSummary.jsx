import React from "react";

const TodoSummary = ({ todos, ClearAll }) => {
  const pending = todos.filter((t) => !t.completed).length;
  const completed = todos.length - pending;
  const completionPercentage =
    todos.length > 0 ? (completed / todos.length) * 100 : 0;

  return (
    <div className="mt-8 p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 animate-fade-in">
      <div className="flex justify-around mb-6 text-center">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-blue-600">{todos.length}</div>
          <div className="text-sm text-gray-500 font-medium">Total</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-green-600">{completed}</div>
          <div className="text-sm text-gray-500 font-medium">Completed</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-orange-600">{pending}</div>
          <div className="text-sm text-gray-500 font-medium">Pending</div>
        </div>
      </div>

      {todos.length > 0 && (
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{Math.round(completionPercentage)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
        </div>
      )}

      <button
        className="w-full py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95"
        onClick={() => ClearAll()}
      >
        Clear All Tasks
      </button>
    </div>
  );
};

export default TodoSummary;
