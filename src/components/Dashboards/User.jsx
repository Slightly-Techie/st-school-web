import React from 'react'
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

const User = () => {
    const userMenus = [
        { title: "Home", src: "user", gap: true,  path: "/" },
        { title: "Dashboard", src: "Chat" , path: "/" },
        { title: "Lessons",  src: "chart", path: "/Lessons"  },
        { title: "Assignment", src: "Calendar",  path: "/" },    
      ];

  return (
    <div className="admin flex flex-col h-screen">
      <div className="navbar fixed inset-x-0 z-50 top-0 z-50">
        <Navbar />
      </div>
      <div className="flex h-screen" style={{overflow:"hidden"}}>
        <div className="sidebar mt-8">
            <Sidebar Menus={userMenus}/>
        </div>
        <div className=" w-screen flex-1 mt-16 relative overflow-y-scroll" >
          <div className="m-4">
            <Outlet /> 
          </div>  
        </div>
      </div>
    </div>
  )
}

export default User