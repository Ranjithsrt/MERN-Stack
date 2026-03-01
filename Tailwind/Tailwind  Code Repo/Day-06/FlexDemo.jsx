import React from "react";

import image1 from "../assets/images/1.png";
const FlexDemo = () => {
  return (
    <div className="p-5">
      <img src={image1} />
      <h3 className="text-center text-xl font-semibold  ">Display</h3>
      <p>
        <span className="m-3 bg-emerald-100 text-emerald-900 px-3 font-semibold rounded-full py-0.5">flex</span>
      </p>

      <div className="m-3 bg-gray-200 p-4 flex gap-3">
        <div className="w-40 p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-1</div>
        <div className="w-40 p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-2</div>
        <div className="w-40 p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-3</div>
      </div>

      <p>
        <span className="m-3 bg-emerald-100 text-emerald-900 px-3 font-semibold rounded-full py-0.5">inline-flex</span>
      </p>

      <div className="m-3 bg-gray-200 p-4 inline-flex gap-3">
        <div className="w-40 p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-1</div>
        <div className="w-40 p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-2</div>
        <div className="w-40 p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-3</div>
      </div>

      <h3 className="text-center text-xl font-semibold">Flex Direction</h3>

      <p>
        <span className="m-3 bg-emerald-100 text-emerald-900 px-3 font-semibold rounded-full py-0.5">flex-row</span>
      </p>

      <div className="m-3 bg-gray-200 p-4 flex flex-row gap-3">
        <div className="w-40 p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-1</div>
        <div className="w-40 p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-2</div>
        <div className="w-40 p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-3</div>
      </div>

      <p>
        <span className="m-3 bg-emerald-100 text-emerald-900 px-3 font-semibold rounded-full py-0.5">flex-row-reverse</span>
      </p>

      <div className="m-3 bg-gray-200 p-4 flex flex-row-reverse gap-3">
        <div className="w-40 p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-1</div>
        <div className="w-40 p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-2</div>
        <div className="w-40 p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-3</div>
      </div>

      <p>
        <span className="m-3 bg-emerald-100 text-emerald-900 px-3 font-semibold rounded-full py-0.5">flex-col</span>
      </p>

      <div className="m-3 bg-gray-200 p-4 flex flex-col gap-3">
        <div className="w-40 p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-1</div>
        <div className="w-40 p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-2</div>
        <div className="w-40 p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-3</div>
      </div>

      <p>
        <span className="m-3 bg-emerald-100 text-emerald-900 px-3 font-semibold rounded-full py-0.5">flex-col-reverse</span>
      </p>

      <div className="m-3 bg-gray-200 p-4 flex flex-col-reverse gap-3">
        <div className="w-40 p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-1</div>
        <div className="w-40 p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-2</div>
        <div className="w-40 p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-3</div>
      </div>

      <h3 className="text-center text-xl font-semibold">Flex Wrap</h3>

      <p>
        <span className="m-3 bg-emerald-100 text-emerald-900 px-3 font-semibold rounded-full py-0.5">flex-nowrap</span>
      </p>

      <div className="m-3 bg-gray-200 p-4 flex flex-row flex-nowrap gap-3">
        <div className="w-[400px] p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-1</div>
        <div className="w-[400px] p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-2</div>
        <div className="w-[400px] p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-3</div>
        <div className="w-[400px] p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-4</div>
        <div className="w-[400px] p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-5</div>
        <div className="w-[400px] p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-6</div>
        <div className="w-[400px] p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-7</div>
      </div>

      <p>
        <span className="m-3 bg-emerald-100 text-emerald-900 px-3 font-semibold rounded-full py-0.5">flex-wrap</span>
      </p>

      <div className="m-3 bg-gray-200 p-4 flex flex-row flex-wrap gap-3">
        <div className="w-[400px] p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-1</div>
        <div className="w-[400px] p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-2</div>
        <div className="w-[400px] p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-3</div>
        <div className="w-[400px] p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-4</div>
        <div className="w-[400px] p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-5</div>
        <div className="w-[400px] p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-6</div>
        <div className="w-[400px] p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-7</div>
      </div>

      <p>
        <span className="m-3 bg-emerald-100 text-emerald-900 px-3 font-semibold rounded-full py-0.5">flex-wrap-reverse</span>
      </p>

      <div className="m-3 bg-gray-200 p-4 flex flex-row flex-wrap-reverse gap-3">
        <div className="w-[400px] p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-1</div>
        <div className="w-[400px] p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-2</div>
        <div className="w-[400px] p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-3</div>
        <div className="w-[400px] p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-4</div>
        <div className="w-[400px] p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-5</div>
        <div className="w-[400px] p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-6</div>
        <div className="w-[400px] p-3 bg-red-100 text-red-900 rounded border border-red-400">Box-7</div>
      </div>

      <h3 className="text-center text-xl font-semibold">Flex Grow / Shrink (flex-*, grow, shrink)</h3>

      <div className="m-3 flex gap-2 bg-gray-200 p-4">
        <div className="w-24 flex-none rounded border border-red-400 bg-red-200 p-3">none</div>
        <div className="flex-auto rounded border border-red-400 bg-red-300 p-3">auto</div>
        <div className="w-32 flex-initial rounded border border-red-400 bg-red-400 p-3">initial</div>
        <div className="flex-1 rounded border border-red-400 bg-red-500 p-3">flex-1</div>
      </div>

      <div className="m-3 flex w-full gap-2 rounded bg-gray-200 p-4">
        <div className="grow rounded border border-green-800 bg-green-200 p-3">grow</div>
        <div className="grow-0 rounded border border-green-800 bg-green-300 p-3">grow-0</div>
      </div>

      <div className="m-3 flex w-full gap-2 bg-gray-200 p-4">
        <div className="w-60 shrink rounded border border-purple-400 bg-purple-200 p-3">shrink</div>
        <div className="w-60 shrink-0 rounded border border-purple-800 bg-purple-300 p-3">shrink-0</div>
      </div>

      <h3 className="text-center text-xl font-semibold">Align Items (items-*)</h3>

      <p>
        <span className="m-3 inline rounded-full bg-emerald-100 px-3 font-semibold text-emerald-900">items-stretch</span>
      </p>

      <div className="m-3 flex h-[300px] w-full items-stretch bg-gray-200 p-4">
        <div className="w-60 rounded border border-green-800 bg-green-200 p-3">items-stretch</div>
      </div>

      <p>
        <span className="m-3 inline rounded-full bg-emerald-100 px-3 font-semibold text-emerald-900">items-start</span>
      </p>

      <div className="m-3 flex h-[300px] w-full items-start bg-gray-200 p-4">
        <div className="w-60 rounded border border-green-800 bg-green-200 p-3">items-start</div>
      </div>

      <p>
        <span className="m-3 inline rounded-full bg-emerald-100 px-3 font-semibold text-emerald-900">items-center</span>
      </p>

      <div className="m-3 flex h-[300px] w-full items-center bg-gray-200 p-4">
        <div className="w-60 rounded border border-green-800 bg-green-200 p-3">items-center</div>
      </div>

      <p>
        <span className="m-3 inline rounded-full bg-emerald-100 px-3 font-semibold text-emerald-900">items-end</span>
      </p>

      <div className="m-3 flex h-[300px] w-full items-end bg-gray-200 p-4">
        <div className="w-60 rounded border border-green-800 bg-green-200 p-3">items-end</div>
      </div>

      <h3 className="text-center text-xl font-semibold">justify-content</h3>

      <p>
        <span className="m-3 inline rounded-full bg-emerald-100 px-3 font-semibold text-emerald-900">justify-start</span>
      </p>
      <div className="m-3 flex w-full items-start justify-start gap-2 bg-gray-200 p-4">
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">1</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">2</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">3</div>
      </div>

      <p>
        <span className="m-3 inline rounded-full bg-emerald-100 px-3 font-semibold text-emerald-900">justify-center</span>
      </p>
      <div className="m-3 flex w-full items-start justify-center gap-2 bg-gray-200 p-4">
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">1</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">2</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">3</div>
      </div>

      <p>
        <span className="m-3 inline rounded-full bg-emerald-100 px-3 font-semibold text-emerald-900">justify-end</span>
      </p>
      <div className="m-3 flex w-full items-start justify-end gap-2 bg-gray-200 p-4">
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">1</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">2</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">3</div>
      </div>

      <p>
        <span className="m-3 inline rounded-full bg-emerald-100 px-3 font-semibold text-emerald-900">justify-between</span>
      </p>
      <div className="m-3 flex w-full items-start justify-between gap-2 bg-gray-200 p-4">
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">1</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">2</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">3</div>
      </div>

      <p>
        <span className="m-3 inline rounded-full bg-emerald-100 px-3 font-semibold text-emerald-900">justify-around</span>
      </p>
      <div className="m-3 flex w-full items-start justify-around gap-2 bg-gray-200 p-4">
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">1</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">2</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">3</div>
      </div>

      <p>
        <span className="m-3 inline rounded-full bg-emerald-100 px-3 font-semibold text-emerald-900">justify-evenly</span>
      </p>
      <div className="m-3 flex w-full items-start justify-evenly gap-2 bg-gray-200 p-4">
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">1</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">2</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">3</div>
      </div>

      <h3 className="text-center text-xl font-semibold">Align-Self</h3>
      <div className="m-3 flex h-[300px] w-full gap-2 bg-gray-200 p-4">
        <div className="w-40 self-auto rounded border border-green-800 bg-green-200 p-3"> self-auto</div>
        <div className="w-40 self-start rounded border border-green-800 bg-green-200 p-3">self-start</div>
        <div className="w-40 self-center rounded border border-green-800 bg-green-200 p-3">self-center</div>
        <div className="w-40 self-end rounded border border-green-800 bg-green-200 p-3">self-end</div>
        <div className="w-40 self-stretch rounded border border-green-800 bg-green-200 p-3">self-stretch</div>
      </div>

      <div className="m-3 flex flex-col w-full gap-2 bg-gray-200 p-4">
        <div className="w-40 self-auto rounded border border-green-800 bg-green-200 p-3"> self-auto</div>
        <div className="w-40 self-start rounded border border-green-800 bg-green-200 p-3">self-start</div>
        <div className="w-40 self-center rounded border border-green-800 bg-green-200 p-3">self-center</div>
        <div className="w-40 self-end rounded border border-green-800 bg-green-200 p-3">end</div>
        <div className="w-40 self-stretch rounded border border-green-800 bg-green-200 p-3">self-stretch</div>
      </div>

      <h3 className="text-center text-xl font-semibold">Align-content</h3>
      <p>
        <span className="m-3 inline rounded-full bg-emerald-100 px-3 font-semibold text-emerald-900">content-start</span>
      </p>

      <div className="mb-5 flex h-[300px] flex-wrap content-start bg-gray-200 p-4 gap-1">
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">1</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">2</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">3</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">4</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">5</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">6</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">7</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">8</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">9</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">10</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">11</div>
      </div>

      <p>
        <span className="m-3 inline rounded-full bg-emerald-100 px-3 font-semibold text-emerald-900">content-center</span>
      </p>
      <div className="mb-5 flex h-[300px] flex-wrap content-center bg-gray-200 p-4 gap-1">
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">1</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">2</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">3</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">4</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">5</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">6</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">7</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">8</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">9</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">10</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">11</div>
      </div>

      <p>
        <span className="m-3 inline rounded-full bg-emerald-100 px-3 font-semibold text-emerald-900">content-end</span>
      </p>
      <div className="mb-5 flex h-[300px] flex-wrap content-end bg-gray-200 p-4 gap-1">
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">1</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">2</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">3</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">4</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">5</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">6</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">7</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">8</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">9</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">10</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">11</div>
      </div>

      <p>
        <span className="m-3 inline rounded-full bg-emerald-100 px-3 font-semibold text-emerald-900">content-between</span>
      </p>
      <div className="mb-5 flex h-[300px] flex-wrap content-between bg-gray-200 p-4 gap-1">
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">1</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">2</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">3</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">4</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">5</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">6</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">7</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">8</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">9</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">10</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">11</div>
      </div>

      <p>
        <span className="m-3 inline rounded-full bg-emerald-100 px-3 font-semibold text-emerald-900">content-around</span>
      </p>
      <div className="flex h-[300px] flex-wrap content-around bg-gray-200 p-4 gap-1">
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">1</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">2</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">3</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">4</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">5</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">6</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">7</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">8</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">9</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">10</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">11</div>
      </div>

      <p>
        <span className="m-3 inline rounded-full bg-emerald-100 px-3 font-semibold text-emerald-900">content-evenly</span>
      </p>
      <div className="flex h-[300px] flex-wrap content-evenly bg-gray-200 p-4 gap-1">
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">1</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">2</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">3</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">4</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">5</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">6</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">7</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">8</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">9</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">10</div>
        <div className="w-40 rounded border border-green-800 bg-green-200 p-3">11</div>
      </div>
    </div>
  );
};

export default FlexDemo;
