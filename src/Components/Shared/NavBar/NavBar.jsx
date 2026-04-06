import React from 'react';
import { NavLink, Link } from 'react-router'; 
import { toast } from 'react-toastify';

const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] border border-[#23BE0A] px-4 py-2 rounded-lg font-bold bg-transparent"
              : "text-base-content/70 hover:text-[#23BE0A] px-4 py-2 font-medium bg-transparent"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Books"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] border border-[#23BE0A] px-4 py-2 rounded-lg font-bold bg-transparent"
              : "text-base-content/70 hover:text-[#23BE0A] px-4 py-2 font-medium bg-transparent"
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pages-to-read"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] border border-[#23BE0A] px-4 py-2 rounded-lg font-bold bg-transparent"
              : "text-base-content/70 hover:text-[#23BE0A] px-4 py-2 font-medium bg-transparent"
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
   <nav className=' sticky z-10'>
     <div className="navbar  max-w-7xl mx-auto px-4 lg:px-8 py-4">
      
      {/* --- Left Side: Just Logo --- */}
      <div className="navbar-start">
        <Link to="/" className="text-2xl font-extrabold text-base-content">
          Book Vibe
        </Link>
      </div>

      {/* --- Center: Desktop Links --- */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 items-center">
          {navLinks}
        </ul>
      </div>

      {/* --- Right Side: Auth Buttons & Mobile Dropdown --- */}
      <div className="navbar-end flex gap-3 items-center">
        {/* Auth Buttons */}
        <Link className="btn bg-[#23BE0A] hover:bg-[#1fa308] text-white px-4 md:px-6 rounded-lg border-none">
          Sign In
        </Link>
        <Link onClick={() => toast.success("Action Successful")} className="btn bg-[#59C6D2] hover:bg-[#4ab8c4] text-white px-4 md:px-6 rounded-lg border-none hidden sm:flex">
          Sign Up
        </Link>

        {/* Mobile Dropdown (Moved here and added 'dropdown-end') */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-2 pr-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 gap-2">
            {navLinks}
          </ul>
        </div>
      </div>

    </div>
   </nav>
  );
};

export default NavBar;