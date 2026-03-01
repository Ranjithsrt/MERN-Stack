import React from "react";
import pic1 from "../assets/img/5.png";
import pic2 from "../assets/img/6.png";
import pic3 from "../assets/img/7.png";

const UpcomingEvents = () => {
  return (
    <section>
      <h3 className="text-[20px] font-bold text-center mt-30 uppercase">
        Upcoming Events
      </h3>
      {/* Academic programs cards */}
      <div className="flex justify-center gap-5 my-15">
        {/* card 1 */}
        <div className="w-[23%] min-h-[150px]  hover:scale-105 transition duration-1000 ease-in-out rounded overflow-hidden shadow-lg">
          <img src={pic1} alt="" className=" w-full h-[200px] object-cover " />
          <div className="p-5 shadow-lg">
            <h3 className="text-[16x] font-bold uppercase ">Campus Open Day</h3>
            <p className="text-[10px] mt-3 leading-5 text-gray-600">
              Join us to explore our facilities, meet faculty, and learn about
              our programs.
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div className="w-[23%] min-h-[150px] hover:scale-105 transition duration-1000 ease-in-out rounded overflow-hidden shadow-lg">
          <img src={pic2} alt="" className="  w-full h-[200px] object-cover " />
          <div className="p-5 shadow-lg">
            <h3 className="text-[16x] font-bold  uppercase">
              Annual Sports Festival
            </h3>
            <p className="text-[10px] mt-3 leading-5 text-gray-600">
              Experience the excitement of our Annual Sports Festival, featuring
              various sports and activities.
            </p>
          </div>
        </div>
        {/* card 3 */}
        <div className="w-[23%] min-h-[150px] hover:scale-105 transition duration-1000 ease-in-out rounded overflow-hidden shadow-lg">
          <img src={pic3} alt="" className=" w-full h-[200px] object-cover " />
          <div className="p-5 shadow-lg">
            <h3 className="text-[16x] font-bold uppercase">
              Graduation Ceremony
            </h3>
            <p className="text-[10px] leading-5 mt-3 text-gray-600">
              Celebrate the achievements of our graduating students at our
              annual Graduation Ceremony.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
