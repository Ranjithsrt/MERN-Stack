import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-15">
      <div className="flex justify-between mb-10">
        <div className="w-[25%]">
          <h1 className="text-[12px] font-bold my-5 uppercase">
            Brighton Academy
          </h1>
          <p className="my-3 text-[12px] text-gray-500">
            Address: 123 Main St, Anytown, USA
          </p>
          <p className="my-3 text-[12px] text-gray-500">Phone: 555-555-5555</p>
          <p className="my-3 text-[12px] text-gray-500">
            Email: 0H2T2@example.com
          </p>
        </div>
        <div>
          <h2 className="text-[12px] font-bold my-5  uppercase">Quick Links</h2>
          <ul className="text-[12px] leading-6 text-gray-500">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Admissions</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[12px] font-bold my-5 uppercase">Follow Us</h2>
          <ul className="text-[12px] text-gray-500 leading-6">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[12px] font-bold my-5 uppercase">Newsletter</h2>
          <form className="flex ">
            <input
              type="email"
              className="bg-gray-500/50 border-gray-300  text-[12px] focus:ring-blue-500 block w-30 p-2.5
              placeholder-gray-500
              "
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="bg-blue-500 text-[12px] w-30 hover:bg-blue-700 text-white font-bold py-2 px-4"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <hr className="my-2  border-gray-300/50" />
      <div className="text-center mt-10">
        <p className="text-[10px]  text-gray-500  ">
          &copy; 2023 Brighton Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
