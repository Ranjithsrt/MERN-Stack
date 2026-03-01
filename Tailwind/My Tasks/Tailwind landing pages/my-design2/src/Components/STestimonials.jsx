import React from "react";
import pic1 from "../assets/img/8.png";
import pic2 from "../assets/img/9.png";

const STestimonials = () => {
  return (
    <section>
      <h1 className="text-[20px] font-bold text-center mt-50 uppercase">
        Student Testimonials
      </h1>
      {/* Testimonials */}

      <section>
        <div className="shadow-lg p-10 w-[80%] mx-auto mb-15 hover:scale-105 transition duration-1000 ease-in-out">
          <div className="flex items-center gap-5 my-5">
            <img src={pic1} alt="" className="w-[50px] h-[50px] rounded-full" />
            <div className="flex flex-col ">
              <h1 className="text-[12px] font-black ">Sophia Clark</h1>
              <p className="text-[10px] text-gray-600">May 15, 2023</p>
            </div>
          </div>
          <div className="flex gap-1 my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-yellow-500 inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.342 4.122a1 1 0 00.95.69h4.36c.969 0 1.371 1.24.588 1.81l-3.53 2.564a1 1 0 00-.364 1.118l1.343 4.122c.3.921-.755 1.688-1.54 1.118l-3.53-2.564a1 1 0 00-1.176 0l-3.53 2.564c-.784.57-1.838-.197-1.539-1.118l1.342-4.122a1 1 0 00-.364-1.118L2.108 9.55c-.783-.57-.38-1.81.588-1.81h4.36a1 1 0 00.951-.69l1.342-4.122z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-yellow-500 inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.342 4.122a1 1 0 00.95.69h4.36c.969 0 1.371 1.24.588 1.81l-3.53 2.564a1 1 0 00-.364 1.118l1.343 4.122c.3.921-.755 1.688-1.54 1.118l-3.53-2.564a1 1 0 00-1.176 0l-3.53 2.564c-.784.57-1.838-.197-1.539-1.118l1.342-4.122a1 1 0 00-.364-1.118L2.108 9.55c-.783-.57-.38-1.81.588-1.81h4.36a1 1 0 00.951-.69l1.342-4.122z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-yellow-500 inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.342 4.122a1 1 0 00.95.69h4.36c.969 0 1.371 1.24.588 1.81l-3.53 2.564a1 1 0 00-.364 1.118l1.343 4.122c.3.921-.755 1.688-1.54 1.118l-3.53-2.564a1 1 0 00-1.176 0l-3.53 2.564c-.784.57-1.838-.197-1.539-1.118l1.342-4.122a1 1 0 00-.364-1.118L2.108 9.55c-.783-.57-.38-1.81.588-1.81h4.36a1 1 0 00.951-.69l1.342-4.122z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-yellow-500 inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.342 4.122a1 1 0 00.95.69h4.36c.969 0 1.371 1.24.588 1.81l-3.53 2.564a1 1 0 00-.364 1.118l1.343 4.122c.3.921-.755 1.688-1.54 1.118l-3.53-2.564a1 1 0 00-1.176 0l-3.53 2.564c-.784.57-1.838-.197-1.539-1.118l1.342-4.122a1 1 0 00-.364-1.118L2.108 9.55c-.783-.57-.38-1.81.588-1.81h4.36a1 1 0 00.951-.69l1.342-4.122z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-yellow-500 inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.342 4.122a1 1 0 00.95.69h4.36c.969 0 1.371 1.24.588 1.81l-3.53 2.564a1 1 0 00-.364 1.118l1.343 4.122c.3.921-.755 1.688-1.54 1.118l-3.53-2.564a1 1 0 00-1.176 0l-3.53 2.564c-.784.57-1.838-.197-1.539-1.118l1.342-4.122a1 1 0 00-.364-1.118L2.108 9.55c-.783-.57-.38-1.81.588-1.81h4.36a1 1 0 00.951-.69l1.342-4.122z" />
            </svg>
          </div>
          <p className="text-[12px] leading-6 mt-3 text-gray-600 italic">
            "My time at Brighton Academy has been transformative. The faculty
            are incredibly supportive, and the curriculum is challenging yet
            rewarding. I've grown both academically and personally."
          </p>
        </div>
        <div className="shadow-lg p-10 w-[80%] mx-auto mb-15 hover:scale-105 transition duration-1000 ease-in-out">
          <div className="flex items-center gap-5 my-5">
            <img src={pic2} alt="" className="w-[50px] h-[50px] rounded-full" />
            <div className="flex flex-col ">
              <h1 className=" text-[12px] font-black ">Sophia Clark</h1>
              <p className="text-[10px] text-gray-600">May 15, 2023</p>
            </div>
          </div>
          <div className="flex gap-1 my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-yellow-500 inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.342 4.122a1 1 0 00.95.69h4.36c.969 0 1.371 1.24.588 1.81l-3.53 2.564a1 1 0 00-.364 1.118l1.343 4.122c.3.921-.755 1.688-1.54 1.118l-3.53-2.564a1 1 0 00-1.176 0l-3.53 2.564c-.784.57-1.838-.197-1.539-1.118l1.342-4.122a1 1 0 00-.364-1.118L2.108 9.55c-.783-.57-.38-1.81.588-1.81h4.36a1 1 0 00.951-.69l1.342-4.122z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-yellow-500 inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.342 4.122a1 1 0 00.95.69h4.36c.969 0 1.371 1.24.588 1.81l-3.53 2.564a1 1 0 00-.364 1.118l1.343 4.122c.3.921-.755 1.688-1.54 1.118l-3.53-2.564a1 1 0 00-1.176 0l-3.53 2.564c-.784.57-1.838-.197-1.539-1.118l1.342-4.122a1 1 0 00-.364-1.118L2.108 9.55c-.783-.57-.38-1.81.588-1.81h4.36a1 1 0 00.951-.69l1.342-4.122z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-yellow-500 inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.342 4.122a1 1 0 00.95.69h4.36c.969 0 1.371 1.24.588 1.81l-3.53 2.564a1 1 0 00-.364 1.118l1.343 4.122c.3.921-.755 1.688-1.54 1.118l-3.53-2.564a1 1 0 00-1.176 0l-3.53 2.564c-.784.57-1.838-.197-1.539-1.118l1.342-4.122a1 1 0 00-.364-1.118L2.108 9.55c-.783-.57-.38-1.81.588-1.81h4.36a1 1 0 00.951-.69l1.342-4.122z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-yellow-500 inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.342 4.122a1 1 0 00.95.69h4.36c.969 0 1.371 1.24.588 1.81l-3.53 2.564a1 1 0 00-.364 1.118l1.343 4.122c.3.921-.755 1.688-1.54 1.118l-3.53-2.564a1 1 0 00-1.176 0l-3.53 2.564c-.784.57-1.838-.197-1.539-1.118l1.342-4.122a1 1 0 00-.364-1.118L2.108 9.55c-.783-.57-.38-1.81.588-1.81h4.36a1 1 0 00.951-.69l1.342-4.122z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500 inline-block"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.342 4.122a1 1 0 00.95.69h4.36c.969 0 1.371 1.24.588 1.81l-3.53 2.564a1 1 0 00-.364 1.118l1.343 4.122c.3.921-.755 1.688-1.54 1.118l-3.53-2.564a1 1 0 00-1.176 0l-3.53 2.564c-.784.57-1.838-.197-1.539-1.118l1.342-4.122a1 1 0 00-.364-1.118L2.108 9.55c-.783-.57-.38-1.81.588-1.81h4.36a1 1 0 00.951-.69l1.342-4.122z" />
            </svg>
          </div>
          <p className="text-[12px] mt-3 leading-6 text-gray-600 italic">
            "My time at Brighton Academy has been transformative. The faculty
            are incredibly supportive, and the curriculum is challenging yet
            rewarding. I've grown both academically and personally."
          </p>
        </div>
      </section>
    </section>
  );
};

export default STestimonials;
