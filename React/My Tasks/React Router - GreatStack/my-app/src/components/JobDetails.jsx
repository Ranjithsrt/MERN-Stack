import { useLoaderData } from 'react-router-dom'
 

// import {  useParams } from 'react-router-dom'

const JobDetails = () => {
 
  const jobDetails = useLoaderData();

   // const {id} = useParams();
  return (
    <div className='job-details'>
        <h5>Job Details</h5>
        <p> <b>job title</b> {jobDetails.title}</p>
        <p> <b>salary</b> {jobDetails.salary}</p>
        <p> <b>location</b> {jobDetails.location}</p>
        <p> <b>description</b> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis eius ipsam soluta ut deserunt temporibus voluptatem molestiae iste maxime, a tempore! Corrupti et sed, perferendis eum dignissimos cum. Explicabo, atque.</p>
        <button>Apply Now</button>
         {/* <p>Job ID: {id}</p> */}
        
        
    </div>
  )
}

export default JobDetails

export const jobDetailsLoader = async({params}) => {
  const {id} = params;
  const res = await fetch("http://localhost:5000/jobs/"+id);
  if(!res.ok){
    throw Error("Could not find details for this job");
  }
  return res.json();
  
}