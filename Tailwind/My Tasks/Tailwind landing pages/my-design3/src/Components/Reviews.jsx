import React from "react";
import pic1 from "../assets/img/2.png";
import pic2 from "../assets/img/3.png";

const Reviews = () => {
  return (
    <>
      <section className="p-15 bg-[#fffbc2] ">
        <h2 className="font-bold text-2xl text-center"> Rave Reviews</h2>
        <div className="flex justify-evenly gap-5 my-15">
          {/*card 1 */}
          <div className="bg-white w-[45%] p-10 mt-10 rounded shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex items-center gap-3">
              <img src={pic1} alt="" className="w-15 h-15 rounded-full" />
              <div className="flex flex-col items-center gap-1">
                <p className="font-bold m-0">sophia Rossi</p>
                <p className="text-[12px] m-0">Augest 12, 2023</p>
              </div>
            </div>

            <div className="flex items-center gap-1 my-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#FFD700"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849 1.416 8.268L12 18.896 4.584 23.54 6 15.272 0 9.423l8.332-1.268z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#FFD700"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849 1.416 8.268L12 18.896 4.584 23.54 6 15.272 0 9.423l8.332-1.268z" />
              </svg>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#FFD700"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849 1.416 8.268L12 18.896 4.584 23.54 6 15.272 0 9.423l8.332-1.268z" />
              </svg>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#FFD700"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849 1.416 8.268L12 18.896 4.584 23.54 6 15.272 0 9.423l8.332-1.268z" />
              </svg>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#FFD700"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849 1.416 8.268L12 18.896 4.584 23.54 6 15.272 0 9.423l8.332-1.268z" />
              </svg>
            </div>
            <p className="mt-3 text-[13px] text-[#7c7c7c] leading-7">
              "An incredible experience! I learned so much about authentic
              Neapolitan pizza in Naples. The instructor was knowledgeable and
              passionate, and the food was amazing."
            </p>
          </div>
          {/*card 1 */}
          <div className="bg-white w-[45%] p-10 mt-10 rounded shadow-lg hover:scale-105 transition duration-300 ease-in-out">
            <div className="flex items-center gap-3">
              <img src={pic2} alt="" className="w-15 h-15 rounded-full" />
              <div className="flex flex-col items-center gap-1">
                <p className="font-bold m-0">Marco Bianchi</p>
                <p className="text-[12px] m-0">July 28, 2023</p>
              </div>
            </div>

            <div className="flex items-center gap-1 my-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#FFD700"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849 1.416 8.268L12 18.896 4.584 23.54 6 15.272 0 9.423l8.332-1.268z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#FFD700"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849 1.416 8.268L12 18.896 4.584 23.54 6 15.272 0 9.423l8.332-1.268z" />
              </svg>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#FFD700"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849 1.416 8.268L12 18.896 4.584 23.54 6 15.272 0 9.423l8.332-1.268z" />
              </svg>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#FFD700"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849 1.416 8.268L12 18.896 4.584 23.54 6 15.272 0 9.423l8.332-1.268z" />
              </svg>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#FFD700"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849 1.416 8.268L12 18.896 4.584 23.54 6 15.272 0 9.423l8.332-1.268z" />
              </svg>
            </div>
            <p className="mt-3 text-[13px] italic text-[#7c7c7c] leading-7">
              "The Elite Pizza Class exceeded all my expectations. The hands-on
              approach and expert guidance helped me improve my pizza-making
              skills significantly. Highly recommended!"
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-[#3A5A40] text-white p-15 flex flex-col items-center">
          <h1 className="font-black text-2xl my-3">
            Ready to Create Your Perfect Pizza?
          </h1>
          <p className="text-[12px] my-3 leading-7 text-center">
            Spaces are extremely limited for this once-in-a-lifetime culinary
            journey. <br />
            Don't miss your chance to learn from the best in the birthplace of
            pizza.
          </p>
          <button className="text-[#b97746] bg-white mt-4 py-2 px-4 rounded-full hover:bg-[#eed7c0] uppercase font-sm">
            Claim Your Spot Now
          </button>
        </div>
      </section>
    </>
  );
};

export default Reviews;
