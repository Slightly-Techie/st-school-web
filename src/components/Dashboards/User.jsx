import React from 'react'
import { Outlet } from 'react-router-dom';
import Layout from './Layout';

const User = () => {
    const userMenus = [
        { title: "Home", src: "user", gap: true,  path: "/" },
        { title: "Dashboard", src: "Chat" , path: "/" },
        { title: "Lessons",  src: "chart", path: "/Lessons"  },
        { title: "Assignment", src: "Calendar",  path: "/Assignments" },    
      ];

  return (
    <Layout menus={userMenus}>
        <Outlet/>
    </Layout>
  )
}

export default User