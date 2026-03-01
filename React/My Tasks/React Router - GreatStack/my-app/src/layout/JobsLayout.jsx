import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div className='jobs-layout'>
        <h2>Job openings</h2>
        <p>We are always looking for talented individuals to join our team.</p>
        <Outlet/>   
    </div>
  )
}

export default JobsLayout