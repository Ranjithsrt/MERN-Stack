import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const jobs = () => {
  const jobsData = useLoaderData();

  return (
    <div className="jobs">
      {jobsData.map((job) => {
        return (
          <Link to={`/jobs/${job.id}`} key={job.id}>
            <h4>{job.title}</h4>
            <p>{job.location}</p>
            <p>{job.salary}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default jobs;

export const jobsLoader = async () => {
  const res = await fetch("http://localhost:5000/jobs");
  if (!res.ok) {
    throw Error("Could not find jobs");
  }
  return res.json();
};

//   http://localhost:5000/jobs

// npx json-server --watch db.json --port 5000
