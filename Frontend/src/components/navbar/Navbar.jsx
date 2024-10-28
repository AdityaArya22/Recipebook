import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navbarLinks = [
    { name: "home", path: "/" },
    { name: "bookmarks", path: "/bookmarks" },
    { name: "about", path: "/about" }
  ];

  return (
    <div className='bg-purple-500 px-10 py-4 text-white flex justify-between items-center'>
      <div className="text-3xl font-bold">RecipeBook</div>
      <div className="items text-xl flex gap-10">
        {navbarLinks.map(({ name, path }, id) => (
          <NavLink
            key={id}
            to={path}
            className={({ isActive }) => 
              `text-xl capitalize cursor-pointer transition-colors hover:text-white ${isActive ? "text-yellow-300 font-semibold" : "text-gray-300"} ${isActive && "bg-purple-600 px-3 py-1 rounded-lg"} hover:font-semibold`
            }
          >
            {name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
