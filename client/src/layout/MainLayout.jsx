import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from'./Header'
import SideBar from './SideBar'
export default function MainLayout() {
  const[showSidebar,setShowSidebar] =useState(false)
  return (
    <div className='bg-[#161d31] w-full min-h-screen'> 
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <SideBar  showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <div className='ml-0 lg:ml-[260px] pt-[95px] transition-all '>
        <Outlet/>
      </div>
     </div>
  )
}
