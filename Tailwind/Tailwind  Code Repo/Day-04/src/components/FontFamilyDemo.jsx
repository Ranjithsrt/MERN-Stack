import React from "react";

const FontFamilyDemo = () => {
  return (
    <div className="p-5 bg-amber-100 m-[50px]">
      <h2 id="title">Font Family</h2>

      <p>Tutor Joe's - Default</p>
      <p className="font-mono">Tutor Joe's - Mono</p>
      <p className="font-serif">Tutor Joe's - Serif</p>
      <p className="font-sans">Tutor Joe's - sans</p>
      <p className="font-doto">Tutor Joe's - Doto</p>
      <p className="font-lobster">Tutor Joe's - Lobster</p>
      <hr />

      <h2 id="title">Font Size</h2>
      <p className="text-xs">text-xs</p>
      <p className="text-sm">text-sm</p>
      <p className="text-base">text-base</p>
      <p className="text-lg">text-lg</p>
      <p className="text-xl">text-xl</p>
      <p className="text-2xl">text-2xl</p>
      <p className="text-3xl">text-3xl</p>
      <p className="text-4xl">text-4xl</p>
      <p className="text-5xl">text-5xl</p>
      <p className="text-6xl">text-6xl</p>
      <p className="text-7xl">text-7xl</p>
      <p className="text-8xl">text-8xl</p>
      <p className="text-9xl">text-9xl</p>
      <p className="text-[120px]">text-120px</p>

      <hr />

      <h2 id="title">Font Style / Weight</h2>

      <p className="italic">Font Style Italic</p>

      <p className="font-thin">font-thin 100</p>
      <p className="font-extralight">font-extralight 200</p>
      <p className="font-light">font-light 300</p>
      <p className="font-normal">font-normal 400</p>
      <p className="font-medium">font-medium 500</p>
      <p className="font-semibold">font-semibold 600</p>
      <p className="font-bold">font-bold 700</p>
      <p className="font-extrabold">font-extrabold 800</p>
      <p className="font-black">font-black 900</p>

      <p id="title">Line Spacing</p>

      <p className="w-[500px] border border-amber-400 p-5 leading-10">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit est inventore reprehenderit modi eaque eligendi possimus cum assumenda, repellendus, magni at obcaecati. Odio, et voluptatibus. Autem laudantium exercitationem animi non.
      </p>

      <p id="title">Text Alignment</p>
      <p className="w-[500px] border border-amber-400 p-5 text-end">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit est inventore reprehenderit modi eaque eligendi possimus cum assumenda, repellendus, magni at obcaecati. Odio, et voluptatibus. Autem laudantium exercitationem animi non.
      </p>
      <p className="w-[500px] border border-amber-400 p-5 text-justify">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit est inventore reprehenderit modi eaque eligendi possimus cum assumenda, repellendus, magni at obcaecati. Odio, et voluptatibus. Autem laudantium exercitationem animi non.
      </p>

      <p id="title">Text Transform</p>

      <p className="text-3xl normal-case">TuTOR JoeS</p>
      <p className="text-3xl uppercase">TuTOR JoeS</p>
      <p className="text-3xl lowercase">TuTOR JoeS</p>
      <p className="text-3xl capitalize">tutor joes</p>

      <p id="title">Text Decoration</p>

      <p className="underline">underline</p>
      <p className="line-through">line-through</p>
      <p className="overline">overline</p>
      <p className="no-underline">no-underline</p>

      <p id="title">UnderLine Offset</p>
      <p className="underline underline-offset-3">underline</p>

      <p id="title">List</p>
      <ul className="list-decimal">
        <li>List Item</li>
        <li>List Item</li>
        <li>List Item</li>
        <li>List Item</li>
      </ul>

      <p id="title">Colors</p>
      <div className="h-60 w-60 bg-amber-900 text-amber-100 text-center flex items-center justify-center text-3xl">Tutor Joes</div>

      <div className="flex my-5 gap-3 bg-yellow-50 p-5  border-2 text-amber-950 border-amber-800 rounded-full">
        <div className="h-10 w-10 bg-sky-50"></div>
        <div className="h-10 w-10 bg-sky-100"></div>
        <div className="h-10 w-10 bg-sky-200"></div>
        <div className="h-10 w-10 bg-sky-300"></div>
        <div className="h-10 w-10 bg-sky-400"></div>
        <div className="h-10 w-10 bg-sky-500">500</div>
        <div className="h-10 w-10 bg-sky-600"></div>
        <div className="h-10 w-10 bg-sky-700"></div>
        <div className="h-10 w-10 bg-sky-800"></div>
        <div className="h-10 w-10 bg-sky-900"></div>
        <div className="h-10 w-10 bg-sky-950"></div>
      </div>

      <div className="flex my-5 gap-3 bg-yellow-50 p-5">
        <div className="h-10 w-10 bg-sky-500/10"></div>
        <div className="h-10 w-10 bg-sky-500/20"></div>
        <div className="h-10 w-10 bg-sky-500/30"></div>
        <div className="h-10 w-10 bg-sky-500/40"></div>
        <div className="h-10 w-10 bg-sky-500/50"></div>
        <div className="h-10 w-10 bg-sky-500/60"></div>
        <div className="h-10 w-10 bg-sky-500/70"></div>
        <div className="h-10 w-10 bg-sky-500/80"></div>
        <div className="h-10 w-10 bg-sky-500/90"></div>
        <div className="h-10 w-10 bg-sky-500/100"></div>
      </div>
      <div className="flex my-5 gap-3 bg-yellow-50 p-5">
        <div className="h-10 w-10 bg-red-50"></div>
        <div className="h-10 w-10 bg-red-100"></div>
        <div className="h-10 w-10 bg-red-200"></div>
        <div className="h-10 w-10 bg-red-300"></div>
        <div className="h-10 w-10 bg-red-400"></div>
        <div className="h-10 w-10 bg-red-500"></div>
        <div className="h-10 w-10 bg-red-600"></div>
        <div className="h-10 w-10 bg-red-700"></div>
        <div className="h-10 w-10 bg-red-800"></div>
        <div className="h-10 w-10 bg-red-900"></div>
        <div className="h-10 w-10 bg-red-950"></div>
      </div>
    </div>
  );
};

export default FontFamilyDemo;
