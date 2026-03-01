import React from "react";
import profile_1 from "../assets/img/1.png";
import profile_2 from "../assets/img/2.png";
import profile_3 from "../assets/img/3.png";

const Client = () => {
  return (
    <section>
      {/* Client Title */}
      <div className="text-center mt-10">
        <h1 className="text-2xl font-black uppercase">
          Client Success Stories
        </h1>
        <p className="mt-6 leading-8 text-[#475569] text-[12px]">
          Hear from our satisfied clients and see how we've helped them achieve
          their goals.
        </p>
      </div>
      {/* Client Cards */}
      <section className="flex flex-wrap justify-center gap-5 mt-15">
        {/* card 1 */}
        <div className=" text-center my-10 w-[32%] shadow-lg p-10 rounded hover:scale-105 transition duration-500 ease-in-out">
          <img
            src={profile_1}
            alt=""
            className="h-20 w-20 rounded-full mx-auto my-5 bg-cover bg-center"
          />

          <p className="leading-6 text-[12px] text-[#475569]">
            "Innovatech Solutions delivered a fantastic product that exceeded
            our expectations. Their team was professional, responsive, and truly
            understood our vision."
          </p>

          <h3 className="text-[16px] font-bold my-3 italic">Sarah Chen</h3>
          <p className="leading-6 text-[12px] text-[#475569]">
            CEO, Example Inc.
          </p>
        </div>
        {/* card 2 */}
        <div className=" text-center my-10 w-[32%] shadow-lg p-10 rounded hover:scale-105 transition duration-500 ease-in-out">
          <img
            src={profile_2}
            alt=""
            className="h-20 w-20 rounded-full mx-auto my-5 bg-cover bg-center"
          />

          <p className="leading-6 text-[12px] text-[#475569]">
            "Working with Innovatech Solutions was a game-changer for our
            business. Their expertise and dedication helped us achieve our goals
            efficiently and effectively."
          </p>

          <h3 className="text-[16px] font-bold my-3 italic">David Lee</h3>
          <p className="leading-6 text-[12px] text-[#475569]">
            Founder of HealthApp Co.
          </p>
        </div>
        {/* card 3 */}
        <div className=" text-center my-10 w-[32%] shadow-lg p-10 rounded hover:scale-105 transition duration-500 ease-in-out">
          <img
            src={profile_3}
            alt=""
            className="h-20 w-20 rounded-full mx-auto my-5 bg-cover bg-center"
          />

          <p className="leading-6 text-[12px] text-[#475569]">
            "We were impressed by Innovatech Solutions's innovative approach and
            commitment to quality. They provided valuable insights and delivered
            a solution that perfectly met our needs."
          </p>

          <h3 className="text-[16px] font-bold my-3 italic">Emily Wong</h3>
          <p className="leading-6 text-[12px] text-[#475569]">
            Director of Marketing at Global Retail Ltd.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Client;
