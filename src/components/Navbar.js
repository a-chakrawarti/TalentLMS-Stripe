import React from "react";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { useAppContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useAppContext();
  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="logo"></img>
            <button onClick={openSidebar} className="btn toggle-btn">
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            <li>
              <button className="link-btn">products</button>
            </li>
            <li>
              <button className="link-btn">developers</button>
            </li>
            <li>
              <button className="link-btn">company</button>
            </li>
          </ul>
          <button className="btn signin-btn">Sign In</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;