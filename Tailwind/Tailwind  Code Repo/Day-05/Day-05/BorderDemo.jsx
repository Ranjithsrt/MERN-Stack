import React from "react";

const BorderDemo = () => {
  return (
    <div className=" p-5">
      <b id="title">Space Class</b>
      <div className=" p-5 space-y-4">
        <div className="h-16 flex justify-center items-center w-16 border border-amber-800">1</div>
        <div className="h-16 flex justify-center items-center w-16 border border-amber-800">2</div>
        <div className="h-16 flex justify-center items-center w-16 border border-amber-800">3</div>
        <div className="h-16 flex justify-center items-center w-16 border border-amber-800">4</div>
      </div>

      <div className=" p-5 flex space-x-4">
        <div className="h-16 w-16 border border-amber-800">1</div>
        <div className="h-16 w-16 border border-amber-800">2</div>
        <div className="h-16 w-16 border border-amber-800">3</div>
        <div className="h-16 w-16 border border-amber-800">4</div>
      </div>

      <b id="title">Border Radius</b>
      <div className="flex flex-wrap gap-3 p-3">
        <div className="h-12 w-48 bg-purple-300 rounded-none p-2">rounded-none</div>
        <div className="h-12 w-12 bg-purple-300 rounded-full p-2 text-[5px]">rounded-full</div>

        <div className="h-12 w-48 bg-purple-300 rounded p-2">rounded</div>
        <div className="h-12 w-48 bg-purple-300 rounded-sm p-2">rounded-sm</div>
        <div className="h-12 w-48 bg-purple-300 rounded-md p-2">rounded-md</div>
        <div className="h-12 w-48 bg-purple-300 rounded-lg p-2">rounded-lg</div>
        <div className="h-12 w-48 bg-purple-300 rounded-xl p-2">rounded-xl</div>
        <div className="h-12 w-48 bg-purple-300 rounded-[25px] p-2">rounded-25px</div>

        <div className="h-12 w-48 bg-purple-300 rounded-tl p-2">rounded-tl</div>
        <div className="h-12 w-48 bg-purple-300 rounded-tr p-2">rounded-tr</div>
        <div className="h-12 w-48 bg-purple-300 rounded-bl p-2">rounded-bl</div>
        <div className="h-12 w-48 bg-purple-300 rounded-br p-2">rounded-br</div>
      </div> 
      <b id="title">Border</b>
      <div className="flex flex-wrap gap-3 p-5">
        <div className="h-12 w-full border-0"> border-0</div>
        <div className="h-12 w-full border">border </div>
        <div className="h-12 w-full border-2"> border-2</div>
        <div className="h-12 w-full border-4">border-4 </div>
        <div className="h-12 w-full border-8">border-8 </div>
        <div className="h-12 w-full border-[12px]">border-12 </div>
      </div>
      <b id="title">Border Side</b>
      <div className="flex flex-wrap gap-3 p-5">
        <div className="h-12 w-full border-b-2"> border-b-2</div>
        <div className="h-12 w-full border-r-2"> border-r-2</div>
        <div className="h-12 w-full border-l-2"> border-l-2</div>
        <div className="h-12 w-full border-t-2"> border-t-2</div>
      </div>
      <b id="title">Border Color</b>
      <div className="flex flex-wrap gap-3 p-5">
        <div className="h-12 w-full border-2 border-transparent"> border-transparent</div>
        <div className="h-12 w-full border-2 border-current text-red-300"> border-current</div>
        <div className="h-12 w-full border-2 border-blue-50 text-red-500"> border-blue</div>
        <div className="h-12 w-full border-2 border-blue-100 text-red-500"> border-blue</div>
        <div className="h-12 w-full border-2 border-blue-200 text-red-500"> border-blue</div>
        <div className="h-12 w-full border-2 border-blue-300 text-red-500"> border-blue</div>
        <div className="h-12 w-full border-2 border-blue-400 text-red-500"> border-blue</div>
        <div className="h-12 w-full border-2 border-blue-500 text-red-500"> border-blue</div>
        <div className="h-12 w-full border-2 border-blue-600 text-red-500"> border-blue</div>
        <div className="h-12 w-full border-2 border-blue-700 text-red-500"> border-blue</div>
        <div className="h-12 w-full border-2 border-blue-800 text-red-500"> border-blue</div>
        <div className="h-12 w-full border-2 border-blue-900 text-red-500"> border-blue</div>
      </div>
      <b id="title">Border Opacity</b>
      <div className="flex flex-wrap gap-3 p-5">
        <div className="h-12 w-full border-2 border-blue-900 text-red-500"> border-blue</div>
        <div className="h-12 w-full border-2 border-blue-900/25 text-red-500"> border-blue</div>
        <div className="h-12 w-full border-2 border-blue-900/50 text-red-500"> border-blue</div>
        <div className="h-12 w-full border-2 border-blue-900/75 text-red-500"> border-blue</div>
        <div className="h-12 w-full border-2 border-blue-900/100 text-red-500"> border-blue</div>
      </div>

      <b id="title">Border Style</b>

      <div className="flex flex-wrap gap-3 p-5">
        <div className="h-12 w-full border-4 border-solid border-yellow-500 text-white p-2 text-center bg-green-600"> border-solid</div>

        <div className="h-12 w-full border-4 border-dashed border-yellow-500 text-white p-2 text-center bg-green-600"> border-dashed</div>

        <div className="h-12 w-full border-4 border-dotted border-yellow-500 text-white p-2 text-center bg-green-600"> border-dotted</div>

        <div className="h-12 w-full border-4 border-double border-yellow-500 text-white p-2 text-center bg-green-600"> border-double</div>
      </div>


      <b id="title">divide</b>
      <div className="mx-4 my-4 bg-green-200 p-2">
        <div className="grid grid-cols-3 divide-x-4 divide-green-500 ">
          <div>Menu</div>
          <div>Menu</div>
          <div>Menu</div>
        </div>
      </div>

      <div className="mx-4 my-4 bg-green-200 p-2">
        <div className="grid grid-cols-1 divide-y-4 divide-green-500/30 divide-dashed ">
          <div>Menu</div>
          <div>Menu</div>
          <div>Menu</div>
        </div>
      </div>

      <b id="title">Ring</b>

      <div className="grid grid-cols-5 gap-5 p-2">
        <button className="bg-pink-500 text-white rounded hover:bg-pink-600 p-3 focus:ring-0 ring-amber-300">ring-0</button>
        <button className="bg-pink-500 text-white rounded hover:bg-pink-600 p-3 focus:ring-1 ring-amber-300">ring-1</button>
        <button className="bg-pink-500 text-white rounded hover:bg-pink-600 p-3 focus:ring-2 ring-amber-300">ring-2</button>
        <button className="bg-pink-500 text-white rounded hover:bg-pink-600 p-3 focus:ring-3 ring-amber-300">ring-3</button>
        <button className="bg-pink-500 text-white rounded hover:bg-pink-600 p-3 focus:ring-4 ring-amber-300">ring-4</button>
        <button className="bg-pink-500 text-white rounded hover:bg-pink-600 p-3 focus:ring-8 ring-amber-300">ring-8</button>
      </div>

      <div className="grid grid-cols-5 gap-5 p-2 mb-5">
        <button className="bg-pink-500 text-white rounded hover:bg-pink-600 p-3 ring-8 ring-amber-300/25">ring-8</button>
        <button className="bg-pink-500 text-white rounded hover:bg-pink-600 p-3 ring-8 ring-amber-300/50">ring-8</button>
        <button className="bg-pink-500 text-white rounded hover:bg-pink-600 p-3 ring-8 ring-amber-300/75">ring-8</button>
        <button className="bg-pink-500 text-white rounded hover:bg-pink-600 p-3 ring-8 ring-amber-300/100">ring-8</button>
      </div>

      <div className="grid grid-cols-5 gap-25 p-2">
        <button className="bg-pink-500 text-white rounded hover:bg-pink-600 p-3 ring-8 ring-amber-300/100">ring-8</button>
        <button className="bg-pink-500 text-white rounded ring-offset-4 hover:bg-pink-600 p-3 ring-8 ring-amber-300/100">ring-8</button>
      </div>

      <b id="title">Shadow</b>

      <div className="flex gap-5">
        <div className="h-24 w-24 bg-green-200 shadow"></div>
        <div className="h-24 w-24 bg-green-200 shadow-sm"></div>
        <div className="h-24 w-24 bg-green-200 shadow-md"></div>
        <div className="h-24 w-24 bg-green-200 shadow-lg"></div>
        <div className="h-24 w-24 bg-green-200 shadow-xl"></div>
        <div className="h-24 w-24 bg-green-200 shadow-2xl"></div>
      </div>

      <b id="title">Opacity</b>
      <div className="flex gap-5 my-5">
        <div className="h-24 w-24 bg-green-200 opacity-0 shadow"></div>
        <div className="h-24 w-24 bg-green-200 opacity-25 shadow-sm"></div>
        <div className="h-24 w-24 bg-green-200 opacity-50 shadow-md"></div>
        <div className="h-24 w-24 bg-green-200 opacity-75 shadow-lg"></div>
        <div className="h-24 w-24 bg-green-200 opacity-100 shadow-xl"></div>
      </div>
    </div>
  );
};

export default BorderDemo;
