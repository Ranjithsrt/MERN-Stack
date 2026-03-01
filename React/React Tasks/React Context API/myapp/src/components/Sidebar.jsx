import React from 'react'
import Themetoggler from './Themetoggler'

// const Sidebar = ({theme, toggleTheme}) => {
const Sidebar = () => {

  return (
    <div>
        <h1>Sidebar</h1>
        {/* <Themetoggler theme={theme} toggleTheme={toggleTheme} /> */}
        <Themetoggler />
    </div>
  )
}

export default Sidebar