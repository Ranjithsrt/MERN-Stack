import React from 'react'
import mobile from './mobile/page'
import labtopo from './laptop/page'

const layout = ({children}) => {
  return (
    <div>
      <mobile/>
      <labtopo/>
      dashboard layout   {children}   
</div>
  )
}

export default layout