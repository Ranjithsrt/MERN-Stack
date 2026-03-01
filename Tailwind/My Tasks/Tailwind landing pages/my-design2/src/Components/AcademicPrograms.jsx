import React from "react";
import pic1 from "../assets/img/2.png";
import pic2 from "../assets/img/3.png";
import pic3 from "../assets/img/4.png";

const AcademicPrograms = () => {
  return (
    <section>
      <h3 className="text-[20px] font-bold text-center my-25 uppercase">
        Academic Programs
      </h3>

      {/* Cards container */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Card 1 */}
        <div className="w-[23%] min-h-[100px] bg-white shadow-lg rounded overflow-hidden hover:scale-105 transition duration-1000 ease-in-out flex flex-col">
          <img
            src={pic1}
            alt="Undergraduate Studies"
            className="w-full h-[200px] object-cover"
          />
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="text-[15px] font-bold uppercase">
              Undergraduate Studies
            </h3>
            <p className="text-[10px] mt-3 text-gray-600 leading-5">
              Explore our diverse range of undergraduate programs designed to
              prepare students for success in their chosen fields.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[23%] min-h-[150px] bg-white shadow-lg rounded overflow-hidden hover:scale-105 transition duration-1000 ease-in-out flex flex-col">
          <img
            src={pic2}
            alt="Graduate Studies"
            className="w-full h-[200px] object-cover"
          />
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="text-[15px] font-bold uppercase">
              Graduate Studies
            </h3>
            <p className="text-[10px] mt-3 text-gray-600 leading-5">
              Discover a world of opportunities for professional growth and
              advancement in our graduate programs.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-[23%] min-h-[150px] bg-white shadow-lg rounded overflow-hidden hover:scale-105 transition duration-1000 ease-in-out flex flex-col">
          <img
            src={pic3}
            alt="Professional Development"
            className="w-full h-[200px] object-cover"
          />
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="text-[15px] font-bold uppercase">
              Professional Development
            </h3>
            <p className="text-[10px] mt-3 text-gray-600 leading-5">
              Unlock your potential through our comprehensive professional
              development programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicPrograms;
