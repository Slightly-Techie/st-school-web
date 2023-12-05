import { useState, useEffect } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import { FaArrowRight, FaBook, FaCog, FaCogs, FaSchool, FaSignOutAlt, FaUserAlt } from 'react-icons/fa'

const Sidebar = ({ Menus }) => {
  const [open, setOpen] = useState(window.innerWidth >= 768)
  const navigate = useNavigate()
  const {logout} = useAuthContext()
  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleMenuItemClick = () => {
    if (window.innerWidth < 768) {
      setOpen(false)
    }
  }

  const handleLogout = () => {
    logout()
  }

  

  return (
    <div className=" text-white">
      <div
        className={` ${
          open ? 'w-72' : 'w-20 '
        } bg-[#000] h-screen p-5 pt-8 flex flex-col justify-between relative duration-300`}
      >
        <div
          src="/src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 bg-black rounded-full p-[4px]  ${open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        ><FaArrowRight/></div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link
              to={`/Dashboard${Menu.path}`}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? 'mb-[28px]' : 'mt-2'}  `}
              onClick={handleMenuItemClick}
            >
              {Menu.src}
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                {Menu.title}
              </span>
            </Link>
          ))}
        </ul>
        <div className="mb-8  ">
        <div 
        onClick={() => navigate('/dashboard/profile/certificate')}
        className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 items-center gap-x-4 float">
            <FaBook size={24}/>
            <span className={`${!open && 'hidden'} origin-left duration-200`}>
              certificate
            </span>
          </div>
          <div className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 items-center gap-x-4 float">
            <FaCog size={24}/>
            <span className={`${!open && 'hidden'} origin-left duration-200`}>
              Settings
            </span>
          </div>
          <div 
          className="flex rounded-md p-2 cursor-pointer text-gray-300 hover:bg-light-white items-center gap-x-4 float">
            <FaUserAlt size={24} />
            <span className={`${!open && 'hidden'} origin-left duration-200`} onClick={handleLogout}>
              Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Sidebar
