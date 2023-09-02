import React from "react";
import { useLocation, Link } from "react-router-dom";

export const Navbar = () => (
  <nav className="text-white text-xl font-semibold bg-[#555a66] py-5 px-10">
    <ul className="flex gap-x-8 ">
      <NavLink path="/">Home</NavLink>
      <NavLink path="/about">About</NavLink>
    </ul>
  </nav>
);

const NavLink = ({ path, children }) => {
  let locate = useLocation().pathname;

  return (
    <li>
      <Link className={locate === path ? "active" : ""} to={path}>
        {children}
      </Link>
    </li>
  );
};
