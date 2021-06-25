import { useState } from "react";
import { Logo, MenuIcon } from "assests/icons";
import { NavLink } from "react-router-dom";
import { useAuth } from "Context/AuthProvider";
export const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const { logoutUser } = useAuth();
  return (
    <>
      <div className="box-border flex justify-between items-center w-full px-8 py-3 bg-primary-dark">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <div
          className="absolute top-3.5 right-6 flex flex-col items-end"
          onMouseOver={() => setShowDropDown(true)}
          onMouseLeave={() => setShowDropDown(false)}>
          <span className="p-1 cursor-pointer">
            <MenuIcon />
          </span>
          {showDropDown && (
            <ul className="relative w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <NavLink to="/home" className="block px-4 py-2 text-sm">
                Home
              </NavLink>
              <NavLink to="/leaderboard" className="block px-4 py-2 text-sm">
                Leader Broad
              </NavLink>
              <button
                className="w-full px-4 py-2 text-sm text-left"
                onClick={() => logoutUser()}>
                Logout
              </button>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
