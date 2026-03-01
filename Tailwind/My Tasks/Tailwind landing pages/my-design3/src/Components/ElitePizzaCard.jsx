import React from "react";

const ElitePizzaCard = () => {
  return (
    <section className="p-5 mt-5 flex flex-col items-center mb-15">
      {/* title */}
      <h1 className="font-black uppercase text-2xl  mb-10 ">The investment</h1>

      {/* card */}
      <div className=" bg-[#f5f5dc] p-15 w-[550px]  shadow-lg rounded-2xl hover:scale-105 transition duration-300 ease-in-out">
        {/* content */}
        <div>
          <h1 className="font-medium uppercase text-2xl text-green-900/75 text-center">
            Elite Pizza MasterClass
          </h1>
          <div className="flex items-center mt-5">
            <span className="font-bold text-3xl">$3,999</span>
            <span className="text-[12px] mx-3">per person</span>
          </div>
        </div>
        <div className="mt-10 mb-3 flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="green"
            viewBox="0 0 24 24"
          >
            <path d="M20.285 2L9 13.285 3.714 8 2 9.714l7 7L22 4.714z" />
          </svg>
          <p className="text-[15px]">3-day intensive hands-on course</p>
        </div>

        <div className="my-3 flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="green"
            viewBox="0 0 24 24"
          >
            <path d="M20.285 2L9 13.285 3.714 8 2 9.714l7 7L22 4.714z" />
          </svg>
          <p className="text-[15px]">Instruction by world-class pizzaioli</p>
        </div>

        <div className="my-3 flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="green"
            viewBox="0 0 24 24"
          >
            <path d="M20.285 2L9 13.285 3.714 8 2 9.714l7 7L22 4.714z" />
          </svg>
          <p className="text-[15px]">
            All premium, locally-sourced materials included
          </p>
        </div>

        <div className="my-3 flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="green"
            viewBox="0 0 24 24"
          >
            <path d="M20.285 2L9 13.285 3.714 8 2 9.714l7 7L22 4.714z" />
          </svg>
          <p className="text-[15px]">
            Exclusive access to a traditional Neapolitan market
          </p>
        </div>

        <div className="my-3 flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="green"
            viewBox="0 0 24 24"
          >
            <path d="M20.285 2L9 13.285 3.714 8 2 9.714l7 7L22 4.714z" />
          </svg>
          <p className="text-[15px]">
            Elegant farewell dinner with wine pairing
          </p>
        </div>
        {/* button */}
        <div className="mt-10">
          <button className="bg-[#b97746] text-white mt-4 py-2 px-4 rounded-full hover:bg-[#cd9a73] uppercase font-sm d-block w-full">
            Book Your place
          </button>
        </div>
      </div>
    </section>
  );
};

export default ElitePizzaCard;
