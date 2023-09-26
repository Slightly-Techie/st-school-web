import React from 'react'
import { Outlet } from 'react-router-dom';
import Layout from './Layout';

const Admin = () => {
    const userMenus = [
        { title: "Admin", src: "User", gap: true,  path: "/" },
        { title: "Dashboard", src: "Chat" , path: "/" },
        { title: "Lessons",  src: "chart", path: "/Lessons"  },
        { title: "Users", src: "Chat" , path: "/" },
        { title: "Create Assignment",  src: "chart", path: "/Lessons"  },
        { title: "Assignment", src: "Calendar",  path: "/" },   
      ];

  return (
    <Layout menus={userMenus}>
        <Outlet/>
    </Layout>
  )
}

export default Admin