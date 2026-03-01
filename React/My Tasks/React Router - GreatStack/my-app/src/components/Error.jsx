import React from 'react'
import { useRouteError, useNavigate } from 'react-router-dom'

const Error = () => {

    const error = useRouteError();
    const navigate = useNavigate();
    
    
  return (
    <div className='error'>
      <h1>An error has occured.</h1>
      <p>{error.message}</p>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  )
}

export default Error