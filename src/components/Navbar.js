import React from "react";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { useAppContext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useAppContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  return (
    <>
      <nav
        className="nav"
        onMouseOver={(e) => {
          !e.target.classList.contains("link-btn") && closeSubmenu();
        }}>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="logo"></img>
            <button onClick={openSidebar} className="btn toggle-btn">
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                products
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                developers
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                company
              </button>
            </li>
          </ul>
          <button className="btn signin-btn">Sign In</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
