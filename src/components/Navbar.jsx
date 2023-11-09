import React, { useState, useEffect } from 'react';
import mainIcon from "../assets/main-icon.png"
import { useNavigate } from 'react-router-dom'
import useAuthStore from "../store/Store"

const Navbar = () => {
  const authStore = useAuthStore();
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false);

  const itemsBase = {
    home: "Home",
    comunnity: "Community",
    aboutUs: "About Us",
    logIn: "Log in",
    signIn: "Sign In"
  }
  const [items, setitems] = useState(itemsBase)

  useEffect(() => {
    if (authStore.user) {
      setitems({
        home: "Home",
        profile: "Profile",
        comunnity: "Friends",
        aboutUs: "Create",
        logOut: "Log Out"
      })
    }
  }, [authStore.user])

  const toggleMenu = () => {setMenuOpen(!menuOpen)}

  const handleItemClick = (key) => {
    if (key === 'logIn') {
      navigate('/login');
    } else if (key === 'logOut') {
      authStore.logOut()
      setitems(itemsBase)
      navigate('/');
    }
    else if (key === 'signIn') {
      navigate('/register');
    }
  }

  return (
    <nav className="bg-white border-gray-200 md:shadow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img src={mainIcon} className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-dark">Anchor</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={menuOpen} onClick={toggleMenu}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${menuOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white bg-cyan-600 border-b-gray-700">
            {Object.entries(items).map(([key, item]) => (
              <li key={key}>
                <Item
                  itemName={item}
                  handleClick={() => handleItemClick(key)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export const Item = (props) => {
  return (
    <a href="#" onClick={props.handleClick} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-600 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold">{props.itemName}</a>
  )
}

export default Navbar
