import React from 'react';
import { Link } from 'react-router-dom';
import { FaBell } from 'react-icons/fa';
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="Image1.png" alt="Logo" className="logo" />

      <ul className="nav-links">
        <li><Link to="/find-jobs">Find Jobs</Link></li>
        <li><Link to="/find-talent">Find Talent</Link></li>
        <li><Link to="/upload-jobs">Upload Jobs</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
      </ul>

      <div className="right-section">
        <div className="notification">
          <FaBell className="bell-icon" />
        </div>

        <div className="profile">
          <img src="user-avatar.png" alt="User" className="avatar" />
          <span className="username">John Doe</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
