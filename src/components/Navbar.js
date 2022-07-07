import React, { useState } from "react";
import "../components/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>Tables</span>
          </h2>
        </div>
        <div className="menu-link">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/userinfo">User Info</NavLink>
            </li>
            <li>
              <NavLink to="#">Admin Pannel</NavLink>
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Admin Pannel</h1>
      </section>
    </>
  );
};

export default Navbar;
