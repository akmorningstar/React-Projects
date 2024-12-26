import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Components/Nav'
const Template:React.FC = () => {
  
  return (
    <div>
      <Nav>
      </Nav>
      
      <main>
        <Outlet/>
      </main>
      
      

      
    </div>
  )
}

export default Template
