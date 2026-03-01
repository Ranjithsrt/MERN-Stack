import React from "react";

const Buttons = () => {
  return (
    <>
      <div className="m-5 p-5 flex gap-3 flex-wrap">
        <button className="bg-blue-700 text-white px-5 py-2.5 hover:bg-blue-800 font-medium rounded text-sm focus:ring-4 focus:ring-blue-300">Click Me</button>

        <button className="bg-red-700 text-white px-5 py-2.5 hover:bg-red-800 font-medium rounded text-sm focus:ring-4 focus:ring-red-300">Click Me</button>

        <button className="bg-lime-700 text-white px-5 py-2.5 hover:bg-lime-800 font-medium rounded text-sm focus:ring-4 focus:ring-lime-300">Click Me</button>

        <button className="bg-yellow-700 text-white px-5 py-2.5 hover:bg-yellow-800 font-medium rounded-full text-sm focus:ring-4 focus:ring-yellow-300">Click Me</button>

        <button className="bg-gray-700 text-white px-5 py-2.5 hover:bg-gray-800 font-medium rounded-full text-sm focus:ring-4 focus:ring-gray-300">Click Me</button>

        <button className="bg-indigo-700 text-white px-5 py-2.5 hover:bg-indigo-800 font-medium rounded-full text-sm focus:ring-4 focus:ring-indigo-300">Click Me</button>

        <button className="bg-indigo-700 text-white px-5 py-2.5 hover:bg-indigo-800 font-medium rounded-full text-sm focus:ring-4 focus:ring-indigo-300">Click Me</button>

        <button className="bg-gradient-to-r  from-blue-500 via-blue-600 to-blue-700 text-white px-5 py-2.5 hover:bg-gradient-to-br  font-medium rounded text-sm focus:ring-4 focus:ring-blue-300">Click Me</button>

        <button className="bg-gradient-to-r  from-red-500 via-red-600 to-red-700 text-white px-5 py-2.5 hover:bg-gradient-to-br  font-medium rounded text-sm focus:ring-4 focus:ring-blue-300">Click Me</button>

        <button className="bg-gradient-to-r  from-red-200 via-red-300 to-yellow-200 text-gray-900 px-5 py-2.5 hover:bg-gradient-to-br  font-medium rounded text-sm focus:ring-4 focus:ring-blue-300">Click Me</button>

        <button className="bg-gradient-to-r  from-purple-300 via-purple-500 to-pink-500 text-white px-5 py-2.5 hover:bg-gradient-to-br  font-medium rounded text-sm focus:ring-4 focus:ring-blue-300">Click Me</button>

        <button className="border-2 px-5 py-2.5 rounded border-purple-600 hover:bg-purple-600 hover:text-white">Click Me</button>

        <button className=" bg-blue-700 text-white px-5 py-2.5 hover:bg-blue-800 font-medium rounded-full text-sm focus:ring-4 focus:ring-blue-300 inline-flex justify-center items-center gap-3">
          Messages <span className="flex justify-center items-center w-4 h-4 bg-blue-200 text-blue-800 rounded-full p-2 ">2</span>
        </button>
      </div>
      <div className="m-5 p-5 ">
        <button className="bg-blue-700 text-white text-xs px-3 py-2 hover:bg-blue-800 font-medium rounded  focus:ring-4 focus:ring-blue-300 mr-3">Extra Small</button>

        <button className="bg-blue-700 text-white text-sm px-3 py-2 hover:bg-blue-800 font-medium rounded  focus:ring-4 focus:ring-blue-300 me-3">Small</button>

        <button className="bg-blue-700 text-white text-base px-5 py-2.5 hover:bg-blue-800 font-medium rounded  focus:ring-4 focus:ring-blue-300 me-3">Base</button>

        <button className="bg-blue-700 text-white text-base px-6 py-2.5 hover:bg-blue-800 font-medium rounded  focus:ring-4 focus:ring-blue-300 me-3 inline-flex gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#ffffff">
            <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
          </svg>
          Large
        </button>
      </div>
    </>
  );
};

export default Buttons;
