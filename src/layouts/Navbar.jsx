import React from "react";
import { useLocation, Link } from "react-router-dom";

export const Navbar = () => (
  <nav>
    <ul>
      <NavLink path="/">Home</NavLink>
      <NavLink path="/swiper">Carousel</NavLink>
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
