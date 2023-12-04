import { Outlet } from 'react-router-dom'
import Layout from './Layout'
import { FaHome, FaDashcube, FaCalendar, FaBookReader } from "react-icons/fa";

const User = () => {
  const userMenus = [
    { title: 'Home', src: <FaHome size={24}/>, gap: true, path: '/' },
    { title: 'Dashboard', src: <FaDashcube size={24}/>, path: '/' },
    { title: 'Lessons', src: <FaBookReader size={24}/>, path: '/Lessons' },
    { title: 'Assignment', src: <FaCalendar size={24}/>, path: '/Assignments' }
  ]

  return (
    <Layout menus={userMenus}>
      <Outlet />
    </Layout>
  )
}

export default User
