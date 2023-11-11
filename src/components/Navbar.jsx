import { useState } from 'react'
import mainIcon from "../assets/main-icon.png"
import useAuthStore from "../store/Store"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const authStore = useAuthStore()

  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {setMenuOpen(!menuOpen)}

  return (
    <nav className="bg-white border-gray-200 md:shadow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center cursor-pointer">
          <img src={mainIcon} className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-dark">Anchor</span>
        </Link>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={menuOpen} onClick={toggleMenu}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${menuOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white bg-cyan-600 border-b-gray-700">
            <li><Link className='hover:text-cyan-600 font-bold cursor-pointer' to="/">Home</Link></li>
            {authStore.user ?
            <>
              <li><Link className='hover:text-cyan-600 font-bold cursor-pointer' to={`/profile/${authStore.user.user_id}`}>Profile</Link></li>
              <li><Link className='hover:text-cyan-600 font-bold cursor-pointer' to="/createpost">Create Post</Link></li>
              <li onClick={() => authStore.logOut()}><Link className='hover:text-cyan-600 font-bold cursor-pointer' to="/">Log out</Link></li>
            </> :
            <>
              <li><Link className='hover:text-cyan-600 font-bold cursor-pointer' to="/">About US</Link></li>
              <li><Link className='hover:text-cyan-600 font-bold cursor-pointer' to="/login">Log in</Link></li>
              <li><Link className='hover:text-cyan-600 font-bold cursor-pointer' to="/register">Sign in</Link></li>
            </>
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
