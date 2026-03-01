import React from "react";

const JoinUs = () => {
  return (
    <section className="my-25 p-15 shadow-lg">
      <div className="text-center">
        <h1 className="text-2xl font-black">Ready to join us?</h1>
        <p className="my-6 leading-6 text-[12px] text-gray-500">
          Follow our simple application process to become a part of the Brighton
          Academy community. <br /> We look forward to receiving your
          application!
        </p>
      </div>

      <section className="flex gap-10 my-15 justify-evenly">
        <div className="w-[50%] bg-gray-50 p-10">
          <h1 className="text-[15px] font-bold">How to Apply</h1>
          <p className="my-3 leading-6 text-[12px] text-gray-500">
            1.Complete the online application form.
          </p>
          <p className="my-2 leading-6 text-[12px] text-gray-500">
            {" "}
            2.Submit your academic transcripts and records.
          </p>
          <p className="my-2 leading-6 text-[12px] text-gray-500">
            3.Provide letters of recommendation from your teachers.
          </p>
          <p className="my-2 leading-6 text-[12px] text-gray-500">
            4.Write a personal statement outlining your goals.
          </p>
        </div>
        <div className="w-[50%] bg-gray-50 p-10">
          <h1 className="text-[15px] font-bold">Important Dates</h1>
          <p className="my-3 leading-6 text-[12px] text-gray-500">
            Application Deadline: December 15, 2024
          </p>
          <p className="my-3 leading-6 text-[12px] text-gray-500">
            Early Decision Notification: January 31, 2025
          </p>
          <p className="my-3 leading-6 text-[12px] text-gray-500">
            Regular Decision Notification: March 31, 2025
          </p>
          <p className="my-3 leading-6 text-[12px] text-gray-500">
            Enrollment Deposit Due: May 1, 2025
          </p>
        </div>
      </section>

      <div className="text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2 px-4 rounded uppercase text-sm">
          Start Your Application{" "}
        </button>
      </div>
    </section>
  );
};

export default JoinUs;
