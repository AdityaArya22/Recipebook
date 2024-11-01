import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from "react-icons/fi"
const Navbar = () => {
  const navbarLinks = [
    { name: "home", path: "/" },
    { name: "bookmarks", path: "/bookmarks" },
    { name: "about", path: "/about" }
  ];
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='bg-purple-500 px-10 py-4 text-white flex justify-between items-center'>
      <div className="text-3xl font-bold">RecipeBook</div>
      <div className={`items text-xl flex transition-all text-center ${isOpen ? " top-[10%]" : "top-[-50%]"} z-10 py-10 flex-col bg-purple-700 w-full left-0 absolute gap-10 md:flex-row md:relative md:bg-transparent md:w-auto md:py-2 `}>
        {navbarLinks.map(({ name, path }, id) => (
          <NavLink
            key={id}
            to={path}
            onClick={()=>{setIsOpen(false)}}
            className={({ isActive }) => 
              `text-xl capitalize cursor-pointer transition-colors hover:text-white ${isActive ? "text-yellow-300 font-semibold" : "text-gray-300"} ${isActive && "bg-purple-600 px-3 py-1 rounded-lg"} hover:font-semibold`
            }
          >
            {name}
          </NavLink>
        ))}
      </div>
        <div className="text-3xl md:hidden cursor-pointer" onClick={()=>{setIsOpen(!isOpen)}}><FiMenu/></div>
    </div>
  );
};

export default Navbar;
