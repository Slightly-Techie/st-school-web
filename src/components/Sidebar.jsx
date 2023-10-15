import { useState, useEffect } from 'react'
import { Link} from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

const Sidebar = ({ Menus }) => {
  const [open, setOpen] = useState(window.innerWidth >= 768)
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

  

  return (
    <div className=" text-white">
      <div
        className={` ${
          open ? 'w-72' : 'w-20 '
        } bg-[#000] h-screen p-5 pt-8 flex flex-col justify-between relative duration-300`}
      >
        <img
          src="/src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link
              to={`/Dashboard${Menu.path}`}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? 'mb-[28px]' : 'mt-2'}  `}
              onClick={handleMenuItemClick}
            >
              <img src={`/src/assets/${Menu.src}.png`} />
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                {Menu.title}
              </span>
            </Link>
          ))}
        </ul>
        <div className="mb-8  ">
          <div className="flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 items-center gap-x-4 float">
            <img src="/src/assets/Setting.png" />
            <span className={`${!open && 'hidden'} origin-left duration-200`}>
              Settings
            </span>
          </div>
          <div className="flex rounded-md p-2 cursor-pointer text-gray-300 hover:bg-light-white items-center gap-x-4 float">
            <img src="/src/assets/User.png" />
            <span className={`${!open && 'hidden'} origin-left duration-200`} onClick={logout}>
              Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Sidebar
