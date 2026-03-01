 import React from 'react'
 
 const layout = (
   {
     children
   }
 ) => {
   return (
     <div>
      <h1 className='text-4xl font-bold underline m-10'>Contact Layout</h1>
      {children}
      <p className='mb-35 mx-2 font-bold text-sm text-center'>copyright @2023</p>
      </div>
   )
 }
 
 export default layout