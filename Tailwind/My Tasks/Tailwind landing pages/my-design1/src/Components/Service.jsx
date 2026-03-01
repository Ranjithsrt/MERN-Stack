import React from "react";
import icon1 from "../assets/img/software.svg";
import icon2 from "../assets/img/mobile.svg";
import icon3 from "../assets/img/database.svg";
import icon4 from "../assets/img/cloud.svg";
import { ReactComponent as Logo } from "../assets/img/software.svg";
import { ReactComponent as Logo1 } from "../assets/img/mobile.svg";
import { ReactComponent as Logo2 } from "../assets/img/database.svg";
import { ReactComponent as Logo3 } from "../assets/img/cloud.svg";

const Service = () => {
  return (
    <section>
      {/* Services Title */}
      <div className="text-center mt-23">
        <h1 className="text-2xl font-black uppercase tracking-wide ">
          Our Services
        </h1>
        <p className="mt-6 leading-5 text-[#475569] text-[12px]">
          We offer a wide range of services to meet your software development
          needs, <br />
          from initial concept to ongoing maintenance.
        </p>
      </div>
      {/* Services Cards */}
      <section className="flex flex-wrap justify-center mt-5">
        {/* card 1 */}
        <div className="my-10 w-[25%] shadow-lg p-10 rounded hover:scale-105 transition duration-500 ease-in-out">
          <Logo className=" text-white  bg-blue-700 rounded-full p-3 w-15 h-15" />

          <h2 className="text-[15px] font-bold my-5">
            Custom Software Development
          </h2>
          <p className="leading-6 text-[12px] text-[#475569]">
            We create bespoke software applications that perfectly align with
            your business processes and objectives.
          </p>
        </div>
        {/* card 2 */}
        <div className="my-10 w-[25%] shadow-lg p-10 rounded hover:scale-105 transition duration-500 ease-in-out">
          <Logo1 className=" text-white  bg-blue-700 rounded-full p-3 w-15 h-15" />
          <h2 className="text-[15px] font-bold my-5">Mobile App Development</h2>
          <p className="leading-6 text-[12px] text-[#475569]">
            Crafting intuitive and engaging mobile experiences for iOS and
            Android platforms.
          </p>
        </div>
        {/* card 3 */}
        <div className="my-10 w-[25%] shadow-lg p-10 rounded  hover:scale-105 transition duration-500 ease-in-out">
          <Logo2 className=" text-white  bg-blue-700 rounded-full p-3 w-15 h-15" />
          <h2 className="text-[15px] font-bold my-3">Cloud Solutions</h2>
          <p className="leading-6 text-[12px] text-[#475569]">
            Leveraging cloud technologies to enhance scalability, security, and
            efficiency.
          </p>
        </div>
        {/* card 4 */}
        <div className="my-10 w-[25%] shadow-lg p-10 rounded hover:scale-105 transition duration-500 ease-in-out">
          <Logo3 className=" text-white  bg-blue-700 rounded-full p-3 w-15 h-15" />
          <h2 className="text-[15px] font-bold my-3">Database Management</h2>
          <p className="leading-6 text-[12px] text-[#475569]">
            Expert management and optimization of your data infrastructure for
            peak performance.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Service;
