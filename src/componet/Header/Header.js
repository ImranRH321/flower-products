import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="bg-green-300 p-4">
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active_link" : "link")}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active_link" : "link")}
          to="/flowers"
        >
          Flowers
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active_link" : "link")}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active_link" : "link")}
          to="/Services"
        >
          Services
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active_link" : "link")}
          to="/store"
        >
          Order
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
