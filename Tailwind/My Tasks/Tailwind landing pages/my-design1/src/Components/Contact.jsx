import React from "react";

const Contact = () => {
  return (
    <section className="w-[100%] h-[300px] bg-[#fffefec4] flex items-center justify-center shadow-lg mt-5">
      <div className="text-center mt-10 ">
        <h1 className="text-2xl font-black ">
          Ready to Elevate Your Business?
        </h1>
        <p className="my-6 leading-8 text-[#475569] text-[12px]">
          Contact us today to discuss your project and discover how we can help
          you succeed.
        </p>
        <button className="bg-[#0c7ff2] text-white font-bold py-2 px-4 rounded hover:bg-[#0a69c7] text-sm">
          Get a Free Consultation
        </button>
      </div>
    </section>
  );
};

export default Contact;
