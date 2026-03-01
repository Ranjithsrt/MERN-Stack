import React from "react";
import banner from "../assets/img/banner.png";

const Details = () => {
  return (
    <section>
      <div className=" flex justify-evenly gap-10 bg-[#fffbc2]  p-15">
        <div className="w-2/2">
          <h1 className="uppercase font-bold text-2xl ">Class Details</h1>
          <p className="my-8 text-[#515050] text-[12px] leading-6">
            Immerse yourself in the culinary traditions of Naples. Learn to
            craft the perfect dough, select the finest ingredients, and master
            the art of baking in a traditional wood-fired oven. This exclusive
            experience is limited to a small group to ensure personalized
            instruction.
          </p>
          <hr className="border-1 border-[#b97746] opacity-25 my-3" />
          {/* Dates */}
          <div className="my-3 flex items-center gap-10">
            <h2 className="text-[#b97746] font-medium">Dates</h2>
            <p className="text-[#3c3c3c] text-[12px]">July 15-17, 2024</p>
          </div>
          <hr className="border-1 border-[#b97746] opacity-25 my-3" />
          {/* Locations */}
          <div className="my-3 flex items-center gap-10">
            <h2 className="text-[#b97746] font-medium">Locations</h2>
            <p className="text-[#3c3c3c] text-[12px]">
              A historic villa in Naples, Italy
            </p>
          </div>
          <hr className="border-1 border-[#b97746] opacity-25 my-3" />
          <div className="my-3 flex items-center gap-10">
            <h2 className="text-[#b97746] font-medium">What's Included</h2>
            <p className="text-[#3c3c3c] text-[12px]">
              Hands-on instruction, all ingredients, market tour, certificate,
              and a farewell gala dinner.
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={banner}
            alt=""
            className="w-[75%] h-[100%] bg-cover rounded-4xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Details;
